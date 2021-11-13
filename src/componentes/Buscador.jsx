import React, { Fragment, useContext, useState } from "react";
import Distancia from "./Distancia";
import Desplegable from "./Desplegable";


function Buscador() {

    const {setDistancia} = useContext(Distancia);

    const [direccion, setDireccion] = useState("");
    const [direccionesNormalizadas, setDireccionesNormalizadas] = useState({});

    const consultarAPI = async (direccionActualizada) => {
        const urlBase = "https://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=";
        const urlAPI = urlBase + direccionActualizada;

        try {
            setDistancia(0);
            const api = await fetch(urlAPI);
            const listadoAPI = await api.json();
            setDireccionesNormalizadas(listadoAPI.direccionesNormalizadas);
        } catch (error) {
            console.log("... sin servicio");
            }
    };

    const calcularDistancia = () => {
        consultarAPI(direccion);
        const cantidadDirecciones = {direccionesNormalizadas}.direccionesNormalizadas.length;
        if (cantidadDirecciones === 1) {
            const radioPlaneta = 6378.137;
            const ubicacionUnahur = {
                latitud: -34.6185348,
                longitud: -58.6364652
            };
            const ubicacionBuscada = {
                latitud: parseFloat(direccionesNormalizadas[0].coordenadas.y),
                longitud: parseFloat(direccionesNormalizadas[0].coordenadas.x)
            };
            const convierteRadianes = (grados) => {
                return grados*Math.PI/180;
            };
            const diferencia = (valor1, valor2) => {
                return convierteRadianes(valor1 - valor2);
            };
            const diferenciaLatitud = diferencia(ubicacionUnahur.latitud, ubicacionBuscada.latitud);
            const diferenciaLongitud = diferencia(ubicacionUnahur.longitud, ubicacionBuscada.longitud);
            const calculo1 = Math.pow(Math.sin(diferenciaLatitud / 2), 2)
                +
                Math.cos(convierteRadianes(ubicacionUnahur.latitud))
                *
                Math.cos(convierteRadianes(ubicacionBuscada.latitud))
                *
                Math.pow(Math.sin(diferenciaLongitud / 2), 2);
            const calculo2 = 2 * Math.atan2(Math.sqrt(calculo1), Math.sqrt(1 - calculo1));
            const distanciaCalculada = radioPlaneta * calculo2
            setDistancia(distanciaCalculada.toFixed(2));
        } else {
            setDireccion("Calle inexistente...");
        }
    };

    const actualizaEstado = (e) => {
        const direccionActualizada = e.target.value;
        setDireccion(direccionActualizada);
        consultarAPI(direccionActualizada);
    }

    return (
        <Fragment>
            <div className="input-group mb-3">
                <input
                    placeholder="Ingresá tu dirección"
                    value={direccion}
                    onChange={actualizaEstado}
                    className="form-control"
                    aria-label="Ingresá tu dirección"
                    aria-describedby="button-addon2"
                />
                <button
                    onClick={calcularDistancia}
                    type="button"
                    className="btn btn-outline-secondary"
                    id="button-addon2">
                    Calcular
                </button>
            </div>
            <Desplegable
                direccionesDesplegables = {direccionesNormalizadas}
            />
        </Fragment>
    );
}

export default Buscador;

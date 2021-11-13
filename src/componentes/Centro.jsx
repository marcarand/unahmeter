import React, { Fragment, useState } from "react";
import Buscador from "./Buscador";
import Distancia from "./Distancia";
import Medidor from "./Medidor";
import "./centro.css";

import imagenUNAHUR from "./unahur.png";

function Centro() {

    const [distancia, setDistancia] = useState(0);

    return (
        <Fragment>
            <Distancia.Provider value={{ distancia, setDistancia }}>
                <div className="container col-xxl-8 px-4 py-5 fondo">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={imagenUNAHUR} className="d-block mx-lg-auto img-fluid imagenUNAHUR" alt={"imagenUNAHUR"} loading="lazy" />
                            <Medidor/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">UNaH Meter... tu distancia hasta la UNAHUR</h1>
                            <p className="lead">Ingresando tu dirección completa, podés calcular la distancia en línea recta hasta la Universidad Nacional de Hurlingham. El buscador te permite ingresar el nombre de la calle y su altura o alternativamente su intersección, seguido de la ciudad o partido. Calculá la distancia en kilómetros para cualquier ubicación del conurbano bonaerense o CABA.</p>
                            <div className="d-grid gap-2">
                                <Buscador/>
                            </div>
                        </div>
                    </div>
                </div>
            </Distancia.Provider>
        </Fragment>
    );
};

export default Centro;

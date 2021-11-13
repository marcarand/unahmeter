import React from "react";
import logo from "./logo.png";

function Encabezado() {

    const creditos = () => {
        window.alert("Esta página ha sido diseña integramente por Carlos Andrés Martín con React y Bootstrap para la cursada del segundo cuatrimestre del 2021 de Construcción de Interfaces de Usuario de la Tecnicatura en Informática de la Universidad Nacional de Hurlingham.");
    }

    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img className="bi me-2" width="40" height="32" src={logo} alt={"logo"} />
                <span className="fs-4">UNaH Meter</span>
              </a>
              <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                <li className="nav-item"><a href="https://github.com/marcarand/unahmeter" className="nav-link">Repositorio</a></li>
                <li className="nav-item"><a onClick={creditos} href="#" className="nav-link">Créditos</a></li>
                <li className="nav-item"><a href="http://www.unahur.edu.ar/" className="nav-link">UNAHUR</a></li>
              </ul>
            </header>
        </div>
    );
};

export default Encabezado;

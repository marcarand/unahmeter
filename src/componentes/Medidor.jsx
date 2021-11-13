import React, { Fragment, useContext } from "react";
import Distancia from "./Distancia";
import "./medidor.css";

function Medidor() {

    const {distancia} = useContext(Distancia);

    if (distancia !== 0) {
        return (
            <Fragment>
                    <p className="distancia">{distancia} km.</p>
            </Fragment>
        );
    } else {
        return "";
    }
};

export default Medidor;

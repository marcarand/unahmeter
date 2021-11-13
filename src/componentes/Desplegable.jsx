import React, { Fragment } from "react";

function Desplegable({direccionesDesplegables}) {
    const longitud = direccionesDesplegables.length;

    if (longitud > 0) {
        return (
            <Fragment>
            <div style={{position: 'relative'}}>
            <div style={{position: 'absolute', background: '#f7faff'}}>
                {direccionesDesplegables.map(function (direccion) {
                    return <div>{direccion.direccion}</div>
                    })
                  }
            </div>
            </div>
            </Fragment>
        );
    } else
        return "";
};

export default Desplegable;

import React, { Fragment } from "react";
import Centro from "./componentes/Centro";
import Encabezado from "./componentes/Encabezado";
import Pie from "./componentes/Pie";

function App() {
    return (
        <Fragment>
            <Encabezado />
            <Centro />
            <Pie />
        </Fragment>
    );
}

export default App;

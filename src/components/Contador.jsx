import { useState } from "react";

const Contador = () => {
    //Creacion del state
    //let [nombreDelEstado, nombreDeFuncionQueActulizaElState] = useState(IndicarElValorInicial)
    let [counter, setCounter] = useState(10);
    //counter = 10 esto no se puede hacer
    //setcounter(10) Asi se modifica el state

    const sumar = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={sumar}>+1</button>
        </div>
    );
};

export default Contador;
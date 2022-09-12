import { useState } from "react";

const contador = () => {
    let [count, setCount] = useState(10);
    return (
        <div>
            <h2>Contador</h2>
            <h3>{count}</h3>
            <button>+1</button>
        </div>
    );
};

export default contador;
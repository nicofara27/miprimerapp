import HolaMundo from "./components/HolaMundo";
import TituloPrincipal from "./components/TituloPrincipal";
import Contador from "./components/Contador";
import "./app.css";

function App() {
  let mes = 9;
  return (
    <div>
      {/* Los componentes se pueden escribir con etiquetas simples o dobles */}
     <TituloPrincipal comision="c7i" mes={mes} /> 
     <HolaMundo/>
     <hr/>
     <Contador/>
    </div>
  );
}

export default App;

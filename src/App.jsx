import HolaMundo from "./HolaMundo";
import TituloPrincipal from "./TituloPrincipal";

function App() {
  let mes = 9;
  return (
    <div>
      {/* Los componentes se pueden escribir con etiquetas simples o dobles */}
     <TituloPrincipal comision="c7i" mes={mes} /> 
     <HolaMundo/>
    </div>
  );
}

export default App;

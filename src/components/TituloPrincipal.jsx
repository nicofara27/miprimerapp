// Functional component
//Para usar los datos se puede usar de forma normal (primera opcion) o con destructuracion (segunda opcion)
// const TituloPrincipal = (props) => {
const TituloPrincipal = ({comision, mes}) => {
    return (
        <>
        <h1>Titulo primer APP</h1>
        <h2>Comision: {comision} - Mes: {mes}</h2>
        </>
    );
};

export default TituloPrincipal;
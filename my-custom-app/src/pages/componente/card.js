export default function Card( {data} ) {
    return(
        <div className="Presentacion">
            <title>{ data.titulo}</title>
            <h1>{data.instruccion} </h1>
            <img src={data.imagen} />
            <span>
                { data.text }
            </span>
        </div>
        );
}

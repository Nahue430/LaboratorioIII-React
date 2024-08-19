const BeerStyles = ({ beers }) => {
    const uniqueBeer = Array.from(new Set(beers.map(beer => beer.beerStyle)));

    return (
        <div>
            <h1>Lista de estilos</h1>
            <ul>
                {uniqueBeer.map((style, index) =>
                (
                    <li key={index}>
                        Estilo: {style}
                    </li>
                ))}
            </ul>
        </div>

    )

}

export default BeerStyles
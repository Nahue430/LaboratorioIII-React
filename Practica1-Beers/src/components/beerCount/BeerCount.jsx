const BeerCount = ({beers}) => {
    
    const redBeers = beers.filter(beer => beer.beerStyle === "Red").length;
    const ipaBeers = beers.filter(beer => beer.beerStyle === "IPA").length;

    return (
        <div>
            <h2>Conteo de Cervezas por Estilo</h2>
            <p>Cervezas de estilo Red: {redBeers}</p>
            <p>Cervezas de estilo IPA: {ipaBeers}</p>
        </div>
    );
};

export default BeerCount;
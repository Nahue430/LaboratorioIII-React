const conversionMonedas = 1500;
const disponible = "Yes";
const noDisponible = "No";
const Disponibles = ({beers}) => {
    
    return (
        <div>
            <h1>Lista de cervezas disponibles:</h1>
            <ul>
                {beers.map(beer => (
                    beer.available ? (
                        <li key={beer.id}>
                            {beer.beerName} ({beer.beerStyle}) - Precio: ${(beer.price * conversionMonedas)} ARS
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
    );

};

export default Disponibles 
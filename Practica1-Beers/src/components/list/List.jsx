const conversionMoneda = 1500;
const disponible = "YES";
const noDisponible = "NO";

const List = ({beers}) => {
    const cervezasDisponibles = beers.filter(beer => beer.available);
    return (
        <div>
            <h1>Lista de Cervezas</h1>
            <ul>
                {beers.map(beer => (
                    <li key={beer.id}>
                        {beer.beerName} ({beer.beerStyle}) - Precio: ${(beer.price * conversionMoneda)} ARS 
                    </li>
                ))}
            </ul>

        </div>
    );
};



export default List;
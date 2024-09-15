
import './App.css'
import Sharks from './components/Sharks'

function App() {
  const sharks = [
    {id: 1, species: "Tiburón Blanco", family: "Lamnidae", lifeExpectancy: 70},
    {id: 2, species: "Tiburón Martillo", family: "Sphyrnidae", lifeExpectancy: 25},
    {id: 3, species: "Tiburón Tigre", family: "Carcharhinidae", lifeExpectancy: 50},
    {id: 4, species: "Tiburón Toro", family: "Carcharhinidae", lifeExpectancy: 16},
    {id: 5, species: "Tiburón Ballena", family: "Rhincodontidae", lifeExpectancy: 70},
    {id: 6, species: "Tiburón Mako", family: "Lamnidae", lifeExpectancy: 35}
    ];

    return(
      <div>
        <h1>Listado de tiburones</h1>
        <Sharks sharks = {sharks} />
      </div>
    )
}

export default App

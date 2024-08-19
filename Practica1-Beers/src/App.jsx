import List from './components/list/List'
import Disponibles from './components/disponibles/Disponibles'
import BeerCount from './components/beerCount/BeerCount'
import BeerStyles from './components/beerStyles/BeerStyles'
import './App.css'
import beers from './components/beers/Beers'
import Product from './components/products/Products'
import Person from './components/persons/Persons'
import Family from './components/family/Family'

function App() {
//Ejercicio complementario  
const products = ["table","couch","chair1","chair2"];
const names = ["Parker","Simmons","Lewis","Poe"];
const persons = [{ name: "Juan", age: 26 },{ name: "Gabriel", age: 27 }, { name:"Valentina", age: 22 }, { name: "Paula", age: 25 }, { name: "Andrés", age: 20 } ];
const personsSorted = persons.sort((a, b) => b.age - a.age);

  return (
    <div>
      <List beers={beers}/>
      <Disponibles beers={beers}/>
      <BeerCount beers={beers} />
      <BeerStyles beers ={beers}/>
      <Product name ={products}/>
      <Person name ={names}/>
      <Family personsSorted ={personsSorted}/>


    </div>
  )

}

export default App

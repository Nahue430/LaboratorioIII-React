
import './App.css'
import Table from './components/Table';


const netIncomes = [{ID: 1, brand: "McDonalds", income: 1291283}, {ID: 2,  brand: "Burger King", income: 1927361 }, {ID: 3, brand: "KFC", income: 1098463 }];
const totalIncome = netIncomes.reduce((acum, company)=> acum + company.income, 0);
const average = totalIncome / netIncomes.length

function App() {
  return (
    <div>
      <Table netIncomes ={netIncomes}/>
      <p>Promedio de ingresos:{average} </p>
    </div>
  )

}

export default App

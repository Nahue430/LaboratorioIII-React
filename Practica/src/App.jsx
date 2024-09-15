import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Facturas from './components/Facturas'

function App () {
  const facturas = [
    {id: 1, name: "Bizcocho", type: "salada", price: 800},
    {id: 2, name: "Chipa", type: "salada", price: 300},
    {id: 3, name: "Medialuna", type: "ambas", price: 500},
    {id: 4, name: "Cañoncito", type: "dulce", price: 750},
    {id: 5, name: "Tortita Negra", type: "dulce", price: 600},
    {id: 6, name: "Vigilante", type: "dulce", price: 450}
  ];

  return (
    <div>
      <h1>Listado de Facturas</h1>
      <Facturas facturas={facturas} />
    </div>
  );
};

export default App

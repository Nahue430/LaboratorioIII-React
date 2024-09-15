import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm'


function App() {
const [finalPrice, setFinalPrice] = useState(null);
return (
  <div>
    <h1>Calculador general de precios</h1>
    <ProductForm setFinalPrice={setFinalPrice} />
    <p>El valor final del producto es: ${finalPrice}</p>
  </div>
);
};

export default App

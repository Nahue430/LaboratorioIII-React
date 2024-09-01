import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import beers from './components/Beers'
import ChangeDollar from './components/ChangeDollar'


function App() {
<div>
  <ChangeDollar beers={beers} />
</div>
}

export default App

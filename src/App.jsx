import { useState } from 'react'
import Navbar from './components/Navbar'
import ListaRickandMorty from './components/ListaRickandMorty'
import imagen from './assets/rick-and-morty-top-banner.png'

function App() {
 

  return (
    <div>
      <header>
        <img src={imagen} className="img-fluid" alt=""/>
      </header>
          
      <Navbar name="Jovenes"/>
    </div>
  )
}

export default App

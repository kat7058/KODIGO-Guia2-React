import { useState } from 'react'
import Navbar from './components/Navbar'
import ListaRickandMorty from './components/ListaRickandMorty'

function App() {
 

  return (
    <div>
          <Navbar name="Jovenes"/>
          <br></br>
          <div className='container'>
          <ListaRickandMorty/>
          </div>
    </div>
  )
}

export default App

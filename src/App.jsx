import { useState } from 'react'
import Navbar from './components/Navbar'
import imagen from './assets/rick-and-morty-top-banner.png'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './components/Login';

function App() {
  const { user, isAuthenticated } = useAuth0();
  /** direccion local de nuestro proyecto */
  console.log(window.location.origin)

  return (
    <div>

      {isAuthenticated ? (
          <>
          <header>
          <img src={imagen} className="img-fluid" alt=""/>
          </header>
          <Navbar name={user.name}/>
          </>
          ) : (
        
           <Login />
        )}
    </div>
  )
}

export default App

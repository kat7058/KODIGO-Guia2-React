import { useState } from 'react'
import Navbar from './components/Navbar'
import imagen from './assets/rick-and-morty-top-banner.png'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './components/Login';
import Search from "./components/CharacterSearch";

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
            <div>
               <img src={imagen} className="img-fluid" alt=""/>
                <div className="text-center">
                    <Login />
                    
                </div>
           </div>
           

        )}
    </div>
  )
}

export default App

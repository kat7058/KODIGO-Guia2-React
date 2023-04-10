import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Bienvenida from './Bienvenida'
import ListaRickandMorty from './ListaRickandMorty'
import Formulario from './CharacterSearch'
import Logout from './Logout'
import Perfil from './Perfil'


export default function Navbar(props) {


    return (
     <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Bienvenid@, {props.name}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <ul className='navbar-nav'> 
                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/CharacterSearch" className='nav-link'>Formulario</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/ListaRickandMorty" className='nav-link'>Lista Rick and Morty</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/perfil" className='nav-link'>Perfil del Usuario</Link>
                            </li>
                            <li className='nav-item'>
                                <Logout />
                            </li>
                        </ul>
                          
                        </div>
                    </div>
                </div>
        </nav>
        <Routes>
            <Route path='/' element={<Bienvenida/>}/>
            <Route path='/ListaRickandMorty' element={<ListaRickandMorty/>}/>
            <Route path='/CharacterSearch' element={<Formulario/>}/>
            <Route path='/perfil' element={<Perfil />} />
        </Routes>
    </BrowserRouter>
    )
}
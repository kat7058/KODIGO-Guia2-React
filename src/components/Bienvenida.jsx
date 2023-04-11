import React from 'react'
import img from '../assets/khaterin2.jpeg';
import imgen from '../assets/mauricio.jpeg';


export default function Bienvenida() {
  return (


<div>
  <br />
  <h1 className="card-title text-center">
    <br />
    RICK & MORTY
  </h1>
  <br />
  <h2  className="card-title text-center">Este proyecto es para poner en práctica todo lo aprendido sobre React, programación orientada a objetos y la utilización de JavaScript, librerías como axion o fetch entre otros.</h2>
  <br />
  <br />
  <br />
  <br />
  <h3  className="card-title text-center" >COLABORADORES</h3>
  <br />
<div className="card mb-3 mt-4">
  <div className="row g-0">
    <div className="col-md-3">
      <img src={img} className="img-fluid rounded-start" height="250" width="350"  alt="..."></img>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h4 className="card-title text-center">Katerin Angel</h4>
        <br />
        <br />
        <h8 className="card-title text-center">Nivel académico: 4° de Ingeniería en sistemas informáticos</h8>
        <br />
        <br />
        <p className="card-text">Aportes:
Creación de repositorio en GitHub, gestión de proyecto, implementación de Hooks(useState(), useEffect() y Fetch()), Programación del formulario para realizar búsquedas de personajes usando la librería axion y diseño.</p>
        <p className="card-text text-center"><small className="text-body-secondary"><strong>"Web developer"</strong></small></p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 mt-4">
  <div className="row g-0">
    <div className="col-md-3">
      <img src={imgen} className="img-fluid rounded-start" width="350"  alt="..."></img>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h4 className="card-title text-center">Mauricio Esquivel</h4>
        <br />
        <br />
        <h8 className="card-title text-center">Nivel académico: Bachillerato Técnico en Contabilidad</h8>
        <br />
        <br />
        <p className="card-text">Aportes:
Implementación de los componentes login, logout, navbar, perfil, tarjetas, la lista principal de los personajes utilizando useState
, Eventos onchange, onsubmit y React Router, además de ser partícipe del diseño de la aplicación. </p>
        <p className="card-text text-center"><small className="text-body-secondary"><strong>"Web developer"</strong></small></p>
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

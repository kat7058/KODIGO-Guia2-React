import React from 'react'
import img from '../assets/khaterin2.jpeg';
import imgen from '../assets/mauricio.jpeg';


export default function Bienvenida() {
  return (


<div>
<div className="card mb-3 mt-4">
  <div className="row g-0">
    <div className="col-md-3">
      <img src={img} className="img-fluid rounded-start" height="250" width="350"  alt="..."></img>
    </div>
    <div className="col-md-5">
      <div className="card-body">
        <h2 className="card-title text-center">Katerin Angel</h2>
        <p className="card-text">Contribucion en el proyecto: Se encargo de crear el componente para la busqueda por nombre y filtrado por estado del personaje, tambien retoco la pagina agregando diseño.</p>
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
        <h2 className="card-title text-center">Mauricio Esquivel</h2>
        <p className="card-text">Contribucion en el proyecto: Se encargo de crear los componentes login, logout, navbar, perfil, tarjetas, la lista principal de los personajes y tampien darle un poco de diseño a la pagina. </p>
        <p className="card-text text-center"><small className="text-body-secondary"><strong>"Web developer"</strong></small></p>
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

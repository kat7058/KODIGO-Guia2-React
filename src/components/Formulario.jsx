import React, { useState } from 'react'

export default function Formulario() {
     /** estado para obtener informacion del personaje en base a su nombre */
     const [personaje, setPersonaje] = useState([]);

     const [nombre, setNombre] = useState({});

     const obtenerPersonajebyName = async () => { 
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/1,183`);
        const datos = await respuesta.json();
        setPersonaje(datos);
        console.log(datos);
     }
     
     const handleName = (e) => {
        //console.log(e.target.value);
        setNombre(e.target.value);
    }

    const handleSubmit = (e) =>{
        obtenerPersonajebyName();
        e.preventDefault();

    }

    //console.log(personaje);

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Ingresa el nombre del personaje</label>
            <input type="text" placeholder='ingresa el personaje' className='form-control' onChange={handleName}/><br></br>
            <button className='btn btn-dark' type='submit'>Buscar personaje</button>
        </form>
        {
                personaje.map((personaje, indice) => {
                    return <div key={indice}>
                            <h2>{personaje.name}</h2>
                        </div>
                })
                }
    </div>
  )
}

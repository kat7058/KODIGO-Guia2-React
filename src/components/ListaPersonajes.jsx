import React, { useEffect, useState } from 'react'

export default function ListaPersonajes() {
    const [Personajes, setPersonajes] = useState ([]);

    const obtenerPersonajes = async () => {
        let respuesta1 = await fetch ("https://rickandmortyapi.com/api/character");
        let datos1 = await respuesta1.json();

        setPersonajes(datos1.results);
    }

    useEffect (()=>{
      obtenerPersonajes();
    },[]);

    console.log(Personajes);



  return (
    <div>personaje</div>
  )
}
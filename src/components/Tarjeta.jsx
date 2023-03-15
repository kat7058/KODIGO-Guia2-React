import React, { useEffect, useState } from "react"

export default function Tarjeta(props){
    const [rickandmorty, setRickandmorty]= useState({});

    const obtenerRickandMortyByUrl= async (url) =>{
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        setRickandmorty(datos);
    }
    useEffect(() => {
obtenerRickandMortyByUrl(props.url);

    },[]);
    console.log(rickandmorty);
    return (

        <div>
        <h1>{props.name}</h1>
        <p>{props.url}</p>
        </div>
    )
}
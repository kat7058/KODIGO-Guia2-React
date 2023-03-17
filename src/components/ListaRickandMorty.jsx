import React from "react"
import { useState, useEffect } from "react"
import Tarjeta from './Tarjeta'


export default function ListaRickandMorty(){
    const[rickandmorty, setRickandmorty] = useState([]);

    const obtenerRickandMorty= async () =>{
        let respuesta = await fetch('https://rickandmortyapi.com/api/character');
        let datos = await respuesta.json();
        //console.log(datos.results);
        setRickandmorty(datos.results);


    }
    useEffect(() => {
        obtenerRickandMorty();
    },[]);
    console.log(rickandmorty);

    return(
    <div className='container'>
        <h1 className="text-center mt-4">Lista de personajes de la serie Rick and Morty</h1>
        <br></br>
            <div className="row">
                {
                rickandmorty.map((personajes, indice) => {
                    return <div className='col-md-4 mt-4'>
                            <Tarjeta key={indice} {...personajes}/>
                        </div>
                })
                }
            </div>
   </div>
  

    )
}
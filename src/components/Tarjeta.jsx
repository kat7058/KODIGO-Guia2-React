import React, { useState, useEffect } from "react"

export default function Tarjeta(props){
    const [rickandmorty, setRickandmorty]= useState({});
    /**estado para manejo de location */
    const [location, setLocation] = useState ({});

    const obtenerRickandMortyByUrl= async (url) =>{
        let respuesta = await fetch(url);
        let datos = await respuesta.json();

        setRickandmorty(datos);
        setLocation(datos.location);
    }


    useEffect(() => {
    obtenerRickandMortyByUrl(props.url);

    },[]);
    console.log(rickandmorty);

    const idModal = `#${rickandmorty.id}`;

    return (

        <div>
           
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{rickandmorty.name}</h5>
                    <img src={rickandmorty.image} alt=""/>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                    ver mas info
                    </button>
                </div>
            </div>


            {/**Modal*/}
            <div className="modal fade" id={rickandmorty.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{rickandmorty.name}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p><b>ID: {rickandmorty.id}</b></p>
                    <p><b>Status: {rickandmorty.status}</b></p>
                    <p><b>Species: {rickandmorty.species}</b></p>
                    <p><b>Gender: {rickandmorty.gender}</b></p>
                    <p><b>Location: {location.name}</b></p>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
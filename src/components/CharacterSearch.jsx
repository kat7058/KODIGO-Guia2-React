import React, { useState} from "react";
import axios from "axios";


 
const Search = () => {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((response) => setResults(response.data.results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del personaje:
          <input type="text" value={name} onChange={handleChange} />
        </label> <br/>
        <br/>
        <button className="btn btn-dark" type="submit">Buscar Personaje</button>
      </form>
      <br/>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <img src={result.image} alt={`${result.name}`} />
           <h3>{result.name}</h3> 
           <p>{result.status}</p>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;


//export default function Formulario() {
     /** estado para obtener informacion del personaje en base a su nombre */
    // const [personaje, setPersonaje] = useState([]);

    // const [nombre, setNombre] = useState("");

    // const obtenerPersonajebyName = async () => { 
       // const respuesta = await fetch('https://rickandmortyapi.com/api/character');
       // const datos = await respuesta.json();
       // setPersonaje(datos);
       // console.log(datos);
    // }
     
    // const handleName = (e) => {
        //console.log(e.target.value);
      //  setNombre(e.target.value);
    //}

   // const handleSubmit = (e) =>{
      //  obtenerPersonajebyName();
     //   e.preventDefault();

    //}
    
   // console.log(nombre);

  //return (
   // <div className='container'>
       // <form onSubmit={handleSubmit}>
           // <label htmlFor="">Ingresa el nombre del personaje</label>
           // <input type="text" placeholder='Ingresa el personaje' className='form-control' onChange={handleName}/><br></br>
           // <button className='btn btn-dark' type='submit'>Buscar personaje</button>
      //  </form>
       // {
               // personaje.map((personaje, indice) => {
                    //return <div key={indice}>
                           // <h2>{personaje.name}</h2>
                       // </div>
               // })
              //  }
  //  </div>
 // )
//}

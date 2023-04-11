import React, { useState} from "react";
import axios from "axios";



function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-term">Buscar por nombre:</label> 
        <input
          id="search-term"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        /> <br />
        <br />
        <label htmlFor="status-filter">Filtrar por estado:</label>
        <select id="status-filter" value={statusFilter} onChange={handleStatusFilterChange}>
          <option value="all">Todos</option>
          <option value="alive">Vivos</option>
          <option value="dead">Muertos</option>
          <option value="unknown">Desconocidos</option>
        </select>
        <br />
        <br />
        <button  className="btn btn-dark" type="submit" >Buscar</button>
      </form>
      <br />

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <br />
            <img src={character.image} alt={character.name} />
            <br />
            {character.name} ({character.status})
          </li>
        ))}
      </ul>
    </div>
  );
  function searchCharacters() {
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const searchParams = {};
  
    if (searchTerm) {
      searchParams.name = searchTerm;
    }
  
    if (statusFilter !== "all") {
      searchParams.status = statusFilter;
    }
  
    axios
      .get(apiUrl, { params: searchParams })
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.log(error));
  };
  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  };
  
  function handleStatusFilterChange(event) {
    setStatusFilter(event.target.value);
  };
  function handleFormSubmit(event) {
    event.preventDefault();
    searchCharacters();
  };
};



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

export default App;



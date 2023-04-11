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

export default App;



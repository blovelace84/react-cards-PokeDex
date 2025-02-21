import React, { useState } from "react";
import useAxios from "./useAxios"; // Custom hook for API calls
import PokemonCard from "./PokemonCard"; // Import PokemonCard component
import "./PokeDex.css"; // Import styles
import pokeball from "./assets/PokeBall.png"; // Ensure correct path

const POKE_API = "https://pokeapi.co/api/v2/pokemon";

function PokeDex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, addPokemon, clearPokemon] = useAxios(POKE_API);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      addPokemon(searchTerm.toLowerCase());
      setSearchTerm(""); // Clear input after searching
    }
  };

  return (
    <div className="pokedex-container">
      <div className="pokedex-header">
        <h1>PokeDex</h1>
        <img src={pokeball} alt="PokeBall" className="pokedex-icon" />
      </div>
      
      <div className="pokedex-form">
        <input
          type="text"
          placeholder="Enter Pokémon name"
          className="pokedex-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="pokedex-button" onClick={handleSearch}>
          Catch Pokémon
        </button>
        <button className="pokedex-button clear" onClick={clearPokemon}>
          Clear Pokémon
        </button>
      </div>

      <div className="pokedex-list">
        {pokemon.length === 0 ? (
          <p>No Pokémon caught.</p>
        ) : (
          pokemon.map((p, index) => (
            <PokemonCard
              key={index}
              name={p.data.name}
              image={p.data.sprites.front_default}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PokeDex;
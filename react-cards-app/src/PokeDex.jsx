import React, { useState } from "react";
import useAxios from "./useAxios";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css"; // Import the CSS file
import pokeBall from "./assets/pokeBall.png";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddPokemon = () => {
    if (searchTerm) {
      addPokemon(searchTerm.toLowerCase()); // Fetch specific Pokémon
      setSearchTerm("");
    }
  };

  return (
    <div className="pokedex-container">
      <h1>Gotta Catch Em All!! Pokemon PokeDex</h1>
      <img src={pokeBall} alt="Poke Ball" className="pokeBall" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter Pokémon name"
        className="pokedex-input"
      />
      <button onClick={handleAddPokemon} className="pokedex-button">
        Catch Pokémon
      </button>
      <button onClick={clearPokemon} className="pokedex-button">
        Release Pokémon
      </button>

      <div className="pokedex-pokemon-list">
        {pokemon.length > 0 ? (
          pokemon.map((p, idx) => (
            <PokemonCard
              key={idx}
              name={p.name}
              image={p.sprites.front_default}
              className="pokedex-pokemon-card"
            />
          ))
        ) : (
          <p>No Pokémon fetched yet.</p>
        )}
      </div>
    </div>
  );
}

export default PokeDex;

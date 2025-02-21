import React, { useState } from "react";
import useAxios from "./useAxios";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import pokeBall from "./assets/PokeBall.png"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDex = () => {
    const [pokemon, addPokemon, clearPokemon] = useAxios(BASE_URL);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddPokemon = () => {
        if(searchTerm) {
            addPokemon(searchTerm.toLowerCase());
            setSearchTerm("");
        }
    };

    return(
        <div className="pokedex">
            <h1>Pokedex</h1>
            <img src={pokeBall} alt="Pokemon Ball" />
            <input
                type="text"
                value={searchTerm}
                className="pokedex-input"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Pokemon name:"
            />
            <button className="pokedex-button" onClick={handleAddPokemon}>Catch Pokemon</button>
            <button className="pokedex-button" onClick={clearPokemon}>Clear Pokemon</button>

            <div className="pokemon-list">
                {pokemon.length > 0 ? (
                    pokemon.map((p, idx) => (
                       <PokemonCard 
                            key={idx}
                            name={p.name}
                            image={p.sprites.front_default}
                        />
                    ))
                ) : (
                    <p>No pokemon caught.</p>
                )}
            </div>
        </div>
    );
}

export default PokeDex;
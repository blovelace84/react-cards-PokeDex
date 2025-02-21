import React, { useState } from "react";
import useAxios from "./useAxios";
import PokemonCard from "./PokemonCard";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokeDex = () => {
    const [pokemon, addPokemon] = useAxios(BASE_URL);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddPokemon = () => {
        if(searchTerm) {
            addPokemon(searchTerm.toLowerCase());
            setSearchTerm("");
        }
    };

    return(
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Pokemon name:"
            />
            <button onClick={handleAddPokemon}>Catch Pokemon</button>

            <div>
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
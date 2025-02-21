import React from "react";
import useFlip from "./hooks";
import pokeDexImg from './assets/PokeDex.jpg';
import "./PokemonCard.css";

const PokemonCard = ({ name, image }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div onClick={toggleFlip} className="pokemon-card">
            <h3>{name.toUpperCase()}</h3>
            <img 
                src={ isFlipped ? image : pokeDexImg } 
                alt={name} 
                width="120" 
                height="120" 
            />
        </div>
    );
}

export default PokemonCard;
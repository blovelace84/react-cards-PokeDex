import React from "react";
import useFlip from "./hooks";
import pokeDexImg from './assets/PokeDex.jpg';

const PokemonCard = ({ name, image }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div onClick={toggleFlip} style={{ cursor: 'pointer', textAlign: "center"}}>
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
import React from "react";
import useFlip from "./hooks";
import backImage from "./assets/back.png";

const PokemonCard = ({ frontImage, backImage, name }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div onClick={toggleFlip} style={{ cursor: 'pointer'}}>
            <img src={ isFlipped ? backImage : frontImage } alt={name} />
        </div>
    );
}

export default PokemonCard;
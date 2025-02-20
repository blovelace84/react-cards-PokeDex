import React from "react";
import useFlip from "./hooks";
import backImage from "./assets/back.png";

const PlayingCard = ({ image }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return(
        <div onClick={toggleFlip} style={{ cursor: 'pointer'}}>
            <img src={ isFlipped ? image : backImage} alt="Playing Card" width="100" />
        </div>
    );
}

export default PlayingCard;
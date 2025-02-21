import React from "react";
import useFlip from "./hooks";
import backImage from "./assets/back.png";
import "./PlayingCard.css";

const PlayingCard = ({ image }) => {
    const [isFlipped, toggleFlip] = useFlip();

    return (
        <div onClick={toggleFlip} className={`playing-card ${isFlipped ? 'flipped' : ''}`} style={{ cursor: 'pointer' }}>
            <img src={isFlipped ? image : backImage} alt="Playing Card" />
        </div>
    );
}

export default PlayingCard;
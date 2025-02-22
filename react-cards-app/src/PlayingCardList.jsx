import React from "react";
import useAxios from "./useAxios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";


const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

const PlayingCardList = () => {
  const [cards, addCard, clearCards] = useAxios(BASE_URL);

  return(
    <div className="container">
      <h1>Pick a Card:</h1>
      
      <button className="button" onClick={() => addCard()}>Draw a Card</button>
      <button className="button" onClick={clearCards}>Reset</button>
      <div className="cards">
        {cards.length > 0 ? (
          cards.map((card, idx) => (
            <PlayingCard key={idx} image={card.cards[0].image} className="card" />
          ))
        ) : (
          <p>No cards drawn yet.</p>
        )}
      </div>
    </div>
  )
}

export default PlayingCardList;
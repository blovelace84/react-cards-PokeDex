import React from "react";
import useAxios from "./useAxios";
import PlayingCard from "./PlayingCard";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

function PlayingCardList() {
  const [cards, addCard, clearCards] = useAxios(BASE_URL);

  return (
    <div>
      <button onClick={() => addCard()}>Draw a Card</button>
      <button onClick={clearCards}>Clear Cards</button>
      <div>
        {cards.length > 0 ? (
          cards.map((card, idx) => (
            <PlayingCard key={idx} image={card.cards[0].image} /> // ✅ Adjust for API response structure
          ))
        ) : (
          <p>No cards drawn yet.</p>
        )}
      </div>
    </div>
  );
}

export default PlayingCardList;

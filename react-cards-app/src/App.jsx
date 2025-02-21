import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Cards</h1>
      <PokeDex />
      <PlayingCardList />
    </div>
  );
}

export default App;
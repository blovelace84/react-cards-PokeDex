import React from "react"
import PlayingCardList from "./PlayingCardList"
import PokeDex from "./PokeDex"
function App() {
  return (
    <div className="App">
      <h1>React Cards</h1>
      <PokeDex />
      <PlayingCardList />
      
    </div>
  )
}

export default App
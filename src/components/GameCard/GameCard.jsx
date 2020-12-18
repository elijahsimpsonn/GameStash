import React from "react";
import "./GameCard.css";

const GameCard = ({ games }) => {
  return (

    <div>
      {games.map((game) => {
        return (
          <div className="game-card" key={game.id}>
            <span>{game.title}</span>
            <br/>
            <span>{game.condition}</span>
            <br/>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default GameCard;

import React, { useContext } from "react";
import { GamestashContext } from "../../context/GamestashContext";
import "./GameCard.css";
import Main from "../../api/Main";


const GameCard = (props) => {
    const { deleteGame } = useContext(GamestashContext)

    const handleDelete = async (id) => {
        try {
            await Main.delete(`/games/${id}`)
            deleteGame(id)
        } catch(err) {
            console.log(err)
        }
    }

  return (

    <div>
      <div className="game-card">
          <span>{props.title}</span>
          <br/>
          <span>{props.condition}</span>
          <br/>
          <button>Edit</button>
          <button onClick={() => handleDelete(props.id)}>Delete</button>
      </div>  
    </div>
  );
};

export default GameCard;

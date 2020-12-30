import React, { useContext, useState } from "react";
import Main from "../../api/Main";
import { useParams } from "react-router-dom";
import { GamestashContext } from "../../context/GamestashContext";
import "./AddGameForm.css";

const AddGameForm = () => {
  const { id } = useParams();
  const { addGame } = useContext(GamestashContext);
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmitGame = async (e) => {
    e.preventDefault();
    if (title === "" || condition === "") {
      alert("Must have title and condition");
    } else {
      try {
        const response = await Main.post(`/consoles/${id}/addGame`, {
          title,
          condition,
        });
        addGame(response.data);
        setTitle('')
        setCondition('')
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form action="">
        <input
          aria-label="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          aria-label="Game Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          type="text"
          placeholder="condition"
        />
        <button aria-label="Add Game" onClick={handleSubmitGame}>Add Game</button>
      </form>
    </>
  );
};

export default AddGameForm;

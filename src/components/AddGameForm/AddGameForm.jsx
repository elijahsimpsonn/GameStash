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
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <form action="">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <input
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          type="text"
          placeholder="condition"
        />
        <button onClick={handleSubmitGame}>Add Game</button>
      </form>
    </div>
  );
};

export default AddGameForm;

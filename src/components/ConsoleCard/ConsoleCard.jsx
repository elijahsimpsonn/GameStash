/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import "./ConsoleCard.css";
import { GamestashContext } from "../../context/GamestashContext";
import Main from "../../api/Main";
import { useHistory } from "react-router-dom";

export default function ConsoleCard(props) {
  const { deleteConsole, games } = useContext(GamestashContext);
  let history = useHistory();

  const handleDelete = async (id) => {
    try {
      await Main.delete(`/consoles/${id}`);
      deleteConsole(id);
    } catch (err) {}
  };

  const handleConsoleSelect = (id) => {
    history.push(`/consoles/${id}`);
  };

  const getGameTotal = games.filter((game) => game.console_id === props.id)
  const gameTotal = getGameTotal.length > 1 ? getGameTotal.length : ""
  const totalText = getGameTotal.length > 1 ? 'Games' : getGameTotal.length === 1 ? 'Game' : ""
 
  return (
    <div className="console-card">
      <span>{props.name}</span>
      <br />
      <span>{gameTotal} {totalText}</span>
      <br />
      <button area-label="Games" onClick={() => handleConsoleSelect(props.id)}>Games</button>
      <button area-aria-label="Delete" onClick={() => handleDelete(props.id)}>Delete</button>
    </div>
  );
}


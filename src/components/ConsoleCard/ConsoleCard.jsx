/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from "react";
import "./ConsoleCard.css";
import { GamestashContext } from "../../context/GamestashContext";
import Main from "../../api/Main";
import { useHistory } from "react-router-dom";

export default function ConsoleCard(props) {
  const { deleteConsole } = useContext(GamestashContext);
  let history = useHistory();

  const handleDelete = async (id) => {
    try {
      await Main.delete(`/consoles/${id}`);
      deleteConsole(id);     //response.data.data.console
    } catch (err) {}
  };

  const handleConsoleSelect = (id) => {
    history.push(`/consoles/${id}`); //pushes this to the history stack, need more in depth understanding on how this works
  };

  return (
    <div className="console-card">
      <span>{props.name}</span>   
      <br />
      {/* <span>Total Games</span> */}
      <br />
      <button onClick={() => handleConsoleSelect(props.id)}>Games</button>  
      <button onClick={() => handleDelete(props.id)}>Delete</button> 
    </div>
  );
}
//Line 27 shows the console name on the card, coming in as a prop from Dashboard
//Line 31 onClick runs consoleSelect from above and sends in the ID it gets from the Dashboard as a prop
//Line 32 onClick runs delete from above and sends in the ID it gets from the Dashboard as a prop
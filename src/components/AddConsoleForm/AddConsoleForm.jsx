import React, { useState, useContext } from "react";
import Main from "../../api/Main";
import { GamestashContext } from "../../context/GamestashContext";

export default function AddConsoleForm() {
  const { addConsole } = useContext(GamestashContext);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Console name must be used");
    } else {
      try {
        const response = await Main.post("/consoles", { name });
        addConsole(response.data);
      } catch (err) {}
    }
  };

  return (
    <>
      <form action="">
        <input
          aria-label="Console Name"
          aria-required="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placehold="name"
        />
        <button aria-label="Submit" type="submit" onClick={handleSubmit}>
          Add Console
        </button>
      </form>
    </>
  );
}

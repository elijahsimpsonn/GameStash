/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import Main from "../../api/Main";

const GameEditComp = (props) => {
  const { id } = useParams();
  let browserHistory = createBrowserHistory();
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Main.get(`/games/${id}`);
        setTitle(response.data.data.games.title);
        setCondition(response.data.data.games.condition);
      } catch (err) {}
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || condition === "") {
      alert("Must have title and condition");
    } else {
      await Main.patch(`/games/${id}`, {
        title,
        condition,
      });
      browserHistory.go(-1);
    }
  };

  return (
    <>
      <form action="">
        <input
          area-label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <input
          area-label="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          type="text"
          placeholder="Condition"
        />
        <br />
        <button area-label="Submit" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default GameEditComp;

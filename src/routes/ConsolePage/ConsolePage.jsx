/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GamestashContext } from "../../context/GamestashContext";
import Main from "../../api/Main";
import GameCard from "../../components/GameCard/GameCard";
import AddGameForm from "../../components/AddGameForm/AddGameForm";
import "./ConsolePage.css";
import { Link } from "react-router-dom"

const ConsolePage = () => {
  const { id } = useParams();
  const { selectedConsole, setSelectedConsole, games, setGames } = useContext(
    GamestashContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Main.get(`/consoles/${id}`);
        setSelectedConsole(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await Main.get("/games");
        setGames(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGames();
  }, []);

  const filterGames = games.filter((game) => game.console_id === id);
  const currentGames = filterGames.sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <section>
      {selectedConsole && (
        <>
          <h1 className="console_title">{selectedConsole.name}</h1>
          <AddGameForm />
          <Link to={"/dashboard"}><button aria-label="Home">Home</button></Link>
          {currentGames.map((game) => {
            return (
              <GameCard
                key={game.id}
                id={game.id}
                title={game.title}
                condition={game.condition}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export default ConsolePage;

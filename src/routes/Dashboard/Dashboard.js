import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Main from "../../api/Main";
import GameCounter from "../../components/GameCounter/GameCounter";
import ConsoleCard from "../../components/ConsoleCard/ConsoleCard";
import { GamestashContext } from "../../context/GamestashContext";
import AddConsoleForm from "../../components/AddConsoleForm/AddConsoleForm";

export default function Dashboard(props) {
  const { consoles, setConsoles, games, setGames } = useContext(GamestashContext);

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const response = await Main.get("/consoles");
        setConsoles(response.data.data.consoles);
      } catch (err) {}
    };
    fetchConsoles();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await Main.get("/games");
        setGames(response.data.data.games);
      } catch (err) {
        console.log(err);
      }
    };
    fetchGames();
  }, []);

  let tally = 0

  return (
    <div>
      <>
        <section className="tally">
        
          <GameCounter />
        </section>

        <section className="buttons">
          <form action="">
            {/* <Link to="search">
              <button className="search_button">Search</button>
            </Link> */}
          </form>
        </section>

        <section>
          <AddConsoleForm />
          {consoles.map((console) => {
            return (
              <ConsoleCard
                key={console.id}
                id={console.id}
                name={console.name}
              />
            );
          })}
        </section>
      </>
    </div>
  );
}

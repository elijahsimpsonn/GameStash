import React, { useContext, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Main from '../../api/Main'
import GameCounter from '../../components/GameCounter/GameCounter'
import ConsoleCard from '../../components/ConsoleCard/ConsoleCard'
import { GamestashContext } from '../../context/GamestashContext'
import AddConsoleForm from "../../components/AddConsoleForm/AddConsoleForm";

export default function Dashboard(props) {

        const { consoles, setConsoles } = useContext(GamestashContext)

        useEffect(() => {
            const fetchConsoles = async () => {
                try {
                    const response = await Main.get('/consoles')
                    // console.log(response.data.data.consoles)
                    setConsoles(response.data.data.consoles)
                    // console.log(consoles)
                } catch(err) {}
            }
            fetchConsoles()
        }, [])


    return (
        <div>
            <>
            <section className="tally">
              {/* Needs to be total number of games within the database */}
              <GameCounter/>
            </section>
      
            <section className="buttons">
              <form action="">
                <Link to="/addgame">
                  <button className="add_button">Add Game</button>
                </Link>
                <Link to="search">
                  <button className="search_button">Search</button>
                </Link>
              </form>
            </section>

            <section>
                <p>Consoles</p>
                <AddConsoleForm/>
                {consoles.map(console => {
                    return(
            
                    <ConsoleCard key={console.id} id={console.id} name={console.name}/>
                   
                    )
                })}
            </section>
          </>
        </div>
    )
}


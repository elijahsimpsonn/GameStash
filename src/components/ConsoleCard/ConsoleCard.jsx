import React, { useContext } from 'react'
import './ConsoleCard.css'
import { GamestashContext } from '../../context/GamestashContext'
import Main from '../../api/Main'
import { useHistory } from "react-router-dom";

export default function ConsoleCard(props) {
    const { deleteConsole } = useContext(GamestashContext)
    let history = useHistory()

    const handleDelete = async (id) => {
        try {
            console.log(id)
           const response = await Main.delete(`/consoles/${id}`)
           console.log(response.data.data.console)
           deleteConsole(response.data.data.console)
        } catch(err) {

        }
    }

    const handleConsoleSelect = (id) => {
        history.push(`/consoles/${id}`)
    }

    return (
        <div className="console-card">
            <span>{props.name}</span>
            <br/>
            <span>Total Games</span>
            <br/>
            <button onClick={() => handleConsoleSelect(props.id)}>Games</button>
            <button onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    )
}

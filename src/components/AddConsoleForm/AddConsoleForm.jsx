import React, { useState, useContext } from 'react'
import Main from '../../api/Main'
import { GamestashContext } from '../../context/GamestashContext'
import './AddConsoleForm.css'

export default function AddConsoleForm() {
    const { addConsole } = useContext(GamestashContext)
    const [name, setName] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
           const response = await Main.post('/consoles', { name })
           addConsole(response.data.data.console)
           console.log(response)
           console.log(response.data.data.console)
        } catch(err) {

        }
    }

    return (
        <div>
            <form action="">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placehold="name" />
                <button type="submit" onClick={handleSubmit}>Add Console</button>
            </form>
        </div>
    )
}

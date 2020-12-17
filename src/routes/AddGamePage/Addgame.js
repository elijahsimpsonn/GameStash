import React from 'react'
import './Addgame.css'
import { Link } from 'react-router-dom'

export default function Addgame() {
    return (
        <section>
            <form action="submit">
                <input type="text" placeholder="Title"/>
                <br/>
                <input type="text" placeholder="Console"/>
                <br/>
                <input type="text" placeholder="Condition"/>
                <br/>
                    <div className='buttons'>
                        <button>Add Game</button>
                        <Link to ="/home"><button className='cancel_button'>Cancel</button></Link>
                    </div>
            </form>
        </section>
    )
}

import React from 'react'
import './ConsoleCard.css'

export default function ConsoleCard(props) {
    return (
        <div className="console-card">
            <span>{props.name}</span>
        </div>
    )
}

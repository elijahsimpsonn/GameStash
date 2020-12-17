import React from 'react'
import './GameCard.css'

const GameCard = ({games}) => {
    return (
        <div>
            {games.map((game => {
                return (
                <>    
                <span>{games.title}</span>
                <span>{games.condition}</span>
                </>
                )
            }))}
        </div>
    )
}

export default GameCard

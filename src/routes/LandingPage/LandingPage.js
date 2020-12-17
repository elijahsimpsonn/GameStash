import React from 'react';
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <>
        <div className="info-block">
            <h2>Welcome to GameStash!</h2>
            <p>GameStash is a video game collection app that allows you to track your game collection by console or title, and keep information on the condition of your game.</p>
        </div>
        <div className="info-block">
            <h3>How It Works:</h3>
            <ul>
                <li>In this Demo version, you just need to click the Start button on this page to get started!</li>
                <li>Once you press the button you will be on the Dashboard. You can see the total number of titles in your collection, as well as see all the titles from a particular console</li>
                <li>You can search for a game by title, which will show you every game in your collection matching that title or having your chosen keywords in it's title</li>
                <li>You can add, delete, and edit any game in your collection</li>
            </ul>
            </div>
            
            <p>Click below to get started!</p>
            <button><Link to={'/dashboard'}>Start</Link></button>
         
         </>
    )
}
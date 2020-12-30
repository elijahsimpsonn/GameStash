import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
    
  return (
    <>
      <h2>Welcome to GameStash!</h2>
      <p>
        GameStash is a video game collection app that allows you to track your
        game collection by console or title, and keep information on the
        condition of your game.
      </p>

      <h3>How It Works:</h3>

      <p>
        In this Demo version, you just need to click the Start button on this
        page to get started!
      </p>
      <p>
        Once you press the button you will be on the Dashboard. You can see the
        total number of titles in your collection, as well as see all the
        consoles in your collection
      </p>
      <p>
        You can create and delete consoles as much as you like, as well as add,
        delete, and edit any game in your collection
      </p>

      <p>Click below to get started!</p>
        <Link className="start" to={"/dashboard"}><button aria-label="Start">Start</button></Link>
    </>
  );
}

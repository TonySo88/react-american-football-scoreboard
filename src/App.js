//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, homeScoreCount] = useState(0);
  let [awayScore, awayScoreCount] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button className="homeButtons__touchdown"
          onClick={ () => {
            homeScoreCount(homeScore + 7)
          }}
          >
            Home Touchdown
             </button>
          <button className="homeButtons__fieldGoal"
          onClick={ () => {
            homeScoreCount(homeScore + 3)
          }}
          >Home Field Goal
          </button>
          <button className="homeButtons_reset"
          onClick={ () => {
            homeScoreCount(homeScore = 0)
          }}
          >
            Home Reset
            </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
          onClick={ () => {
            awayScoreCount(awayScore + 7)
          }}
          >
            Away Touchdown
            </button>
          <button className="awayButtons__fieldGoal"
          onClick={ () => {
            awayScoreCount(awayScore + 3)
          }}
          >
            Away Field Goal
            </button>
          <button className="awayButtons_reset">Away Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
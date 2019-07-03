import React from 'react';
import './App.css';
import Joke from './jokes/Joke';
import jokesData from "./jokes/jokesData"

function App() {

  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
  return (
    <div>
      <h1 style={styles}>Good {timeOfDay}!</h1>
      {jokeComponents}
    </div>
  )
}



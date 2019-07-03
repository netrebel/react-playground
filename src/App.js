import React from "react"
import './App.css';
import Joke from './jokes/Joke';
import jokesData from "./jokes/jokesData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Miguel",
            age: "38",
            styles: {
                fontSize: 30
            },
            isLoading: true
        }
        this.timeOfDayMessage = this.timeOfDayMessage.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    timeOfDayMessage() {
        const date = new Date();
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return timeOfDay;
    }

    render() {
        const styles = {
            fontSize: 30
        }
        const timeOfDayMessage = this.timeOfDayMessage();
        switch (timeOfDayMessage) {
            case 'morning':
                styles.color = "#04756F";
                break;
            case 'afternoon':
                styles.color = "#8914A3";
                break
            case 'night':
                styles.color = "#D90000"
                break;
            default:
                styles.color = ""
        }

        const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
                <h1 style={styles}>Good {timeOfDayMessage}!</h1>

                {this.state.isLoading && jokeComponents.length > 0 ? <h1>Loading... {jokeComponents.length} jokes</h1> : jokeComponents}
            </div>
        )
    }
}

export default App

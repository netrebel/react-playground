import React from "react"
import './App.css';
import Joke from './jokes/Joke';
import jokesData from "./jokes/jokesData"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            character: {},
            styles: {
                fontSize: 30
            },
            isLoading: true,
            status: false
        }
        this.timeOfDayMessage = this.timeOfDayMessage.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState((prevState) => {
            console.log(prevState)
            return {
                status: !prevState.status
            }
        })
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
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

        const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);
        const buttonText = (!this.state.status) ? 'Log in' : 'Log out';
        return (
            <div>
                <h1>Hi {this.state.character.name}</h1>
                <h1 style={styles}>Good {timeOfDayMessage}!</h1>
                <button onClick={this.handleOnClick}>{buttonText}</button>

                {this.state.isLoading && jokeComponents.length > 0 ? <h1>Loading... {jokeComponents.length} jokes</h1> : jokeComponents}
            </div>
        )
    }
}

export default App

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
            status: false,
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.timeOfDayMessage = this.timeOfDayMessage.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
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

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <textarea
                        value={"Some default value"}
                        onChange={this.handleChange}
                    />

                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Is friendly?
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />

                    <label>Favorite Color:</label>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your favorite color is {this.state.favColor}</h2>

                    <button>Submit</button>

                    {this.state.isLoading && jokeComponents.length > 0 ? <h1>Loading... {jokeComponents.length} jokes</h1> : jokeComponents}
                </form>


            </div>
        )
    }
}

export default App

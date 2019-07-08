import React from "react";

function FormComponent(props) {
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={props.handleChange}
                />
                <br />
                <input
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />
                <h1>{props.data.firstName} {props.data.lastName}</h1>
                <textarea
                    value={"Some default value"}
                    onChange={props.handleChange}
                />

                <br />

                <label>
                    <input
                        type="checkbox"
                        name="isFriendly"
                        checked={props.data.isFriendly}
                        onChange={props.handleChange}
                    /> Is friendly?
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />

                <label>Favorite Color:</label>
                <select
                    value={props.data.favColor}
                    onChange={props.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>

                <h1>{props.data.firstName} {props.data.lastName}</h1>
                <h2>You are a {props.data.gender}</h2>
                <h2>Your favorite color is {props.data.favColor}</h2>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;
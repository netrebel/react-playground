import React from "react";
import './App.css';
import FormComponent from "./FormComponent";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                data={this.state} //{...this.state} to avoid passing a 'data' object
            />
        )
    }
}

export default Form

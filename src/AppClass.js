import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class AppClass extends React.Component {
    
    constructor(){
        super();
        this.state = {
            name: "Miguel",
            age: "38"
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>   
        )
    }    
}

export default AppClass

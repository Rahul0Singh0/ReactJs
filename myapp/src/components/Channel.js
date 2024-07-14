import React from "react";

class Channel extends React.Component {
    constructor() { // Constructor is a method used to initialize an object's state in a class.
        super(); // Super() function is to call the constructor of the parent class.
        // Here parent class name is Component
        this.state = { // state object
            // here can change the value
            message: 'press Subscribe button'
        }
    }
    subscribe() {
        this.setState({
            message: 'Thanks for subscribing YT channel'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.subscribe()}}>Subscribe</button>
            </div>
        )
    }
}

export default Channel;
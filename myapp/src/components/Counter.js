import React, {Component} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter : 0
        }
    }

    buttonHandler = () => {
        this.setState({
            counter: this.state.counter+1,
        })
        // console.log(this.state.counter)
    }

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.buttonHandler}>Counter</button>
            </>
        )
    }
}
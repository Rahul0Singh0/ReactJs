// class component
import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            address: ''
        }
    }
    handleUsername=(event) => {
        this.setState({
            username: event.target.value
        });
    }
    handleAddress=(event) => {
        this.setState({
            address: event.target.value
        });
    }
    handleSubmit=(event) => {
        alert(`${this.state.username} ${this.state.address}`);
        event.preventDefault(); // prevent default behaviour of submit button
        // prevent load the data (we don't want to submit data)
    }
  render() {
    // const {username, address} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <lable>Username</lable>
            <input type='text' value={this.state.username}
            onChange={this.handleUsername}></input>
        </div>
        <div>
            <lable>Address</lable>
            <textarea type='text' value={this.state.address}
            onChange={this.handleAddress}></textarea>
        </div>
        {/* Submit button has default behaviour 
        whenever click it load the data(submit the data) */}
        <button>Submit</button>
      </form>
    )
  }
}

import React, { Component } from 'react'

export class Susant extends Component {
    state = {
        marks: 0
    }

    marksIncremented=()=>{
        this.setState({marks: this.state.marks+1})
    }
  render() {
    return (
      <div>
        <h2 onMouseOver={this.marksIncremented}>Susant's Marks {this.state.marks}</h2>
      </div>
    )
  }
}

export default Susant

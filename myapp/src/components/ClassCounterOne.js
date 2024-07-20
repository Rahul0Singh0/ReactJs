import React, { Component } from 'react'

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    // by default only first time redered
    componentDidMount() {
        console.log('Checking')
        document.title = `clicked ${this.state.count} times`
    }

    // by default component rendered whenever any activities done in this component
    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.count)
        console.log(this.state.count)
        if(prevState.count !== this.state.count) {
          console.log("Testing")
          document.title = `clicked ${this.state.count} times`
        }
    }
   // So, this will achieved in function component also by using useEffect hook 
    // example in FunctionCounterOne 

  render() {
    return (
      <div>
        <input type='text' value={this.state.name} onChange={e => {
          this.setState({name: e.target.value})
        }}></input>
        <button onClick={() => {this.setState({count: this.state.count+1})}}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne

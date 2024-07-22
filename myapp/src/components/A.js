import React, { Component } from 'react'
import B from './B'
import C from './C';
import { Provider } from './context';

// export const mycontext = React.createContext();
export class A extends Component {
    state = {
        name: "Rahul Singh",
        roll: 20
    }
    handleClickContext = () => {
        this.setState({roll: this.roll+1})
    }
  render() {
    const contextValue = {
        data: this.state,
        handlecheck: this.handleClickContext
    }
    return (
      <div>
        <h1>Component A</h1>
        {/* without props */}
        <Provider value={contextValue}>
            <B/>
            <C/>
        </Provider>

        {/* pass using props */}
        {/* <B name={this.state.name}></B> */}
      </div>
    )
  }
}

export default A

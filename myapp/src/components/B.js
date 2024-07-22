import React, { Component } from 'react'
import C from './C'
import {mycontext} from './A'
import { Consumer } from './context'


export class B extends Component {
  render() {
    return (
      <div>
        <h1>Component B</h1>
        <Consumer>
            {
              ({data, handlecheck}) => (
                <div>
                  <h3>
                    {data.roll},{data.name}
                  </h3>
                  <button onClick={handlecheck}>Change Roll no</button>
                </div>
              )
            }
        </Consumer>
        {/* <C name={this.props.name}></C> */}
      </div>
    )
  }
}

export default B

import React, { Component } from 'react'
import A from './A'
import { mycontext } from './A'
import { Consumer } from './context'

export class C extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        {/* {this.props.name} */}
        <Consumer>
            {data=><h3>data</h3>}
        </Consumer>
      </div>
    )
  }
}

export default C

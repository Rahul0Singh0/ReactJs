import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qty : 0
      }
    }
    
  render() {
    return (
      <div>
        <Cart/>
      </div>
    )
  }
}

export default Product

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            qty: 0
        }
    }

    updateQtry = () => {
        this.setState ({
            qty: this.state.qty+1
        })
    }

    componentDidMount() {
        console.log("Execute after component render")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("component updated")
    }

    render() {
        return (
            <div>
                <h1>Cart : {this.state.qty}</h1>
                <button onClick={this.updateQtry}>Update Quantity</button>
            </div>
        )
    } 
}

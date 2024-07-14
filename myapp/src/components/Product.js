import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ProductID : '',
         qty : 0
      }
    }
    
    addToCart = (pid) => {
        // console.log(pid)
        this.setState({
            ProductID : pid,
            qty : this.state.qty+1
        })
    }

  render() {
    return (
      <div>
        <button onClick={()=>{this.addToCart(1)}}>Add to Cart</button>
        <Cart ProductID={this.state.ProductID}  qty = {this.state.qty}/>
      </div>
    )
  }
}

export default Product

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: this.props.qty
        }
    }

    // updateQtry = () => {
    //     this.setState ({
    //         qty: this.state.qty+1
    //     })
    // }

    static getDerivedStateFromProps(props, state) {
        // console.log(props.qty) 
        // console.log(state.qty)
        if(props.qty !== state.qty) {
            return {qty : props.qty}
        }
        return null;
    }

    // this method called, when component will added to actual DOM
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

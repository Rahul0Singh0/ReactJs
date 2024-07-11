import React, { Component } from "react";
// Event handling in Class Component

class CFunctionClick extends Component {

    constructor(props) {
        super(props);
        // this.changeEvent = this.changeEvent.bind(this); // bind for accessible to 'this' in method

        this.state = {
            course: "MCA",
            roll: this.props.roll
        }
    }

    // bind 'this' in constructor, then also 'this' can access in normal method/function
    // changeEvent() { // Method
    //     console.log('Hello Event Handling in Class Component',this.state.course)
    // }

    // without bind this keyword can also access in Arrow method
    changeEvent = () => {
        this.state = ({ // Mutable
            course: "BCA"
        })
        console.log('Hello Event Handling in Class Component',this.state.course)
        console.log(this.props.roll)
    }

    render() {
        const numbers = this.props.numbers
        // const numbers = [3,4,5,6];
        // map returns callback function
        // const newNumbers = numbers.map((numbers) => { return <li>{numbers}</li> })

        // console.log(numbers)
        // console.log(newNumbers)

        return(
            <React.Fragment>
                <button onClick={this.changeEvent}>Hit me</button>
                {this.state.course}
                {this.props.roll}
                <ul>
                    {
                        numbers.map((numbers) => { return <li key = {numbers}>{ numbers }</li>})
                    }
                </ul>
                {numbers[0]} {/**Direcltly access*/}
            </React.Fragment>
        )
    }
}

export default CFunctionClick;
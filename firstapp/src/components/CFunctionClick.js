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
        return(
            <div>
                <button onClick={this.changeEvent}>Hit me</button>
                {this.state.course}
                {this.props.roll}
            </div>
        )
    }
}

export default CFunctionClick;
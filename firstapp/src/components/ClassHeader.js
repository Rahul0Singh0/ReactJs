import React from "react";
// React must be import whenever using jsx

// In class component, doesnot mandatory to pass props like a passing in functional component
class ClassHeader extends React.Component {
    render() {
        return <h1>Hello {this.props.name} {this.props.last}</h1>
    }
}

export default ClassHeader;
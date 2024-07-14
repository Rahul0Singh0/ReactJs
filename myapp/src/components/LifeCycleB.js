import React, {Component} from "react";
// Mounting phase
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Rahul"
        }
        console.log("LifeCycleB : constructor")
    }

    static getDerivedStateFromProps(props, state) {
        // before displaying, we can change in props and state at time of Mounting 
        console.log("LifeCycleB : getDerivedStateFromProps");
        return null
    }

    // After Component Rendered, use below method
    // this method called, when component will added to actual DOM
    componentDidMount() {
        console.log("LifeCycleB : componentDidMount");
    }

    render() {
        console.log("LifeCycleB : render");
        return (
            <div>
            LifeCycleB
            </div>
        )
    }
}

export default LifeCycleA
import React, {Component} from "react";
import LifeCycleB from "./LifeCycleB";
// Mounting phase
class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        // to use getDerivedStateFromProps, initial state must be define
        this.state = {
            name: "Rahul"
        }
        console.log("LifeCycleA : constructor")
    }

    static getDerivedStateFromProps(props, state) {
        // before displaying, we can change in props and state at time of Mounting 
        console.log("LifeCycleA : getDerivedStateFromProps");
        return null
    }

    // After Component Rendered, use below method
    // this method called, when component will added to actual DOM
    componentDidMount() {
        console.log("LifeCycleA : componentDidMount");
    }

    render() {
        console.log("LifeCycleA : render");
        return (
            <div>
            LifeCycleA
            <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
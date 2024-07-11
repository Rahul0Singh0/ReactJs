import React from "react";
import Testing from "./Testing";
// React must be import whenever using jsx

// In class component, doesnot mandatory to pass props like a passing in functional component
class ClassHeader extends React.Component {
    // without constructor, make a state
    state = {
        users: [
            {id:1, name: "brian", class: "A"},
            {id:2, name: "fernando", class: "B"}
        ]
    }

    render() {
        // console.log(this.state.users[0].id)
        // const users = this.state.users.map(user => {
        //     return (
        //         <>
        //             <h2>{user.id}</h2>
        //             <h2>{user.name}</h2>
        //             <h2>{user.class}</h2>
        //         </>
        //     )
        // })
        return (
            <>
                <h1>Hello {this.props.name} {this.props.last}</h1>
                {/* <h2>{this.state.users[0].name}</h2>
                <h2>{users}</h2> */}
                {
                    this.state.users.map(user=> {
                        return (
                            <>
                            {/* to make it distinct */}
                            {/* <h1 key={user.id}> 
                                {user.id}
                                {user.name}
                                {user.class}
                            </h1> */}
                            <Testing key={user.id} value={user.id}></Testing>
                            </>
                        )
                    })
                }
            </>
        )
    }
}

export default ClassHeader;
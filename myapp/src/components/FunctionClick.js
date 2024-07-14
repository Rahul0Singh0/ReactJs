import React from "react";

// Event Handling in functional component
function FunctionClick() {
    function changeEvent(e) { // Function
        // e.preventDefault(); // forcefully prevent this event(like return false) this line will not work0
        console.log('Hello Event Handling...',this)
    }
    return (
        // <div>
        //     {/* in Event Handling, we are not calling the function so we don't use ()
        //     cause whenever call the function, without click the button function perform their operation on console
        //     Event handling shoud be function not function call */}

        //     {/* <button onClick={changeEvent}>Click Me</button> */}

        //     <a href="https://google.com" onClick={changeEvent}>Click Me</a>
        // </div>
        
        // Learn Fragment
        // Fragment is used to group of list of elements without creating extra node
        // <React.Fragment>
        //     <a href="https://google.com" onClick={changeEvent}>clickme</a>
        //     <h1>Hello me</h1>
        // </React.Fragment>

        // another way to use Fragment
        <>
            <a href="https://google.com" onClick={changeEvent}>clickme</a>
            <h1>Hello me</h1>
        </>
    )
}

export default FunctionClick;
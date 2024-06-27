import React from "react";

// Event Handling in functional component
function FunctionClick() {
    function changeEvent() { // Function
        console.log('Hello Event Handling...')
    }
    return (
        <div>
            {/* in Event Handling, we are not calling the function so we don't use ()
            cause whenever call the function, without click the button function perform their operation on console
            Event handling shoud be function not function call */}
            <button onClick={changeEvent}>Click Me</button>
        </div>
    )
}

export default FunctionClick;
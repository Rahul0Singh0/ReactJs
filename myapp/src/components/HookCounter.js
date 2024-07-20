import React, { useEffect, useState } from "react";

// useEffect = whenever our component update or rendered then useEffect automatically invoke by default
export default function HookCounter() {

    let [counter, setCounter] = useState(0)
    let [counter1, setCounter1] = useState(0)

    // const setHandler = () => {
    //     setCounter(++counter)
    //     // console.log(counter)
    // }

    const increment = () => {
        setCounter(counter+1)
    }

    const decrement = () => {
        setCounter1(counter1-1)
    }

    // useEffect(() => {
    //     console.log("Rahul Singh")
    // })

    // specify for which button, this will call by default
    // useEffect(() => {
    //     console.log("Rahul Singh")
    // },[counter1]) 

    useEffect(() => {
        console.log("Rahul Singh")
    },[counter1, counter])

    // useState with previous state
    const Incremented = () => {
        for(let i = 0; i < 10; i++) {
            setCounter(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            {/* <button onClick={setHandler}>Check</button> */}
            <button onClick={increment}>Increment : {counter}</button>
            <button onClick={decrement}>Decrement : {counter1}</button>
            <button onClick={Incremented}>Incremented by 10 : {counter}</button>
        </div>
    )
}



// useState hook
// export default function HookCounter() {
//     let [counter, setCounter] = useState(0)

//     function stateHandler() {
//         setCounter(++counter)
//         console.log(counter)
//     }
//     return (
//         <div>
//             {counter}
//             <button onClick={stateHandler}>Counter</button>
//         </div>
//     )
// }


// export default function HookCounter() {
//     // useState hook
//     // const channelName = React.useState("Technical Suneja")
//     // const name = channelName[0];
//     // console.log(name)
//     // const setName = channelName[1];
//     // // console.log(setName)

//     // Array destructuring
//     const [channelName, setName] = useState('Technical Suneja')
//     const [count, setCount] = useState("Subscribers")
//     const stateHandler = () => {
//         // Array Destructuring
//         // channelName[1]("Ajay Suneja");
//         setName('Ajay Suneja') // original name on 0th and update on 1st index
//         setCount("44k");
//     }
//     return (
//         <div>
//             {channelName }
//             {count}
//             <button onClick={stateHandler}>Click here</button>
//         </div>
//     )
// }
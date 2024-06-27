import React from "react";
// Function name must be same as file name
// function Header() {
//     return <h1>Hello Functional Component</h1>
// }

// const Header = () => {
//     return <h1>Hello Functional Component</h1>
// }

// export default Header; // If u need to use this component into another component then must be export

// export const Header = () => {
//     return <h1>Hello Functional Component</h1>
// }



// with the help of props component recieve defined attribute's value use it/display it 
export const Header = (props) => {
    // console.log(props);
    // for multiple line, return using () parenthesis

    // Important point for interview
    // props.name = "Ajay"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    // It means props is immutable

    return (
        // only one tag support in return so
        // So, whenever use more than one tag then enclose by div or any other
        <div>
            <h1>Hello {props.name} {props.last}</h1>
            {props.children}
        </div>
    )
}
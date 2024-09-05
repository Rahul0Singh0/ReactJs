import React from "react";
import ReactDOM from "react-dom/client";

// React Element equivalent to DOM Element
// React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Namastey React 🚀"
);

console.log(heading)

// JSX is an XML-like syntax extension to ECMAScript without any defined semantics.
// It's NOT intended to be implemented by engines or browsers.
// JSX is JS syntax which is easier to create React Element
// JSX helps to write HTML code in React
// h1 tag create using jsx
// jsx - html like or xml like syntax but not html or xml
// Note: Can't say that html inside JS or xml inside JS (Wrong Definition)
const jsxHeading = <h1 id="heading">Namastey React using JSX 🚀</h1>
// jsxHeading is React Element(Object) and <h1>Namastey React using JSX</h1> is JSX.
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);






/* 
// to achieve nested html structure using react
// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div",{id: "child"},
//         React.createElement("h1",{},"I am h1 tag.")
//     )
// )
// create two elements as a siblings
const parent = React.createElement(
    "div",
    {id: "parent"},
    // Array of Children
    React.createElement("div",{id: "child"}, [
        React.createElement("h1",{}, "I am h1 tag.🚀"),
        React.createElement("h2",{}, "I am h2 tag.")
    ]),
    React.createElement("div",{id: "child2"}, [
        React.createElement("h1",{}, "I am h1 tag."),
        React.createElement("h",{}, "I am h2 tag.")
    ])
)

// JSX: will make our life easy when we have to create tags.
// modern react development


console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, // This object is a place where we give attributes to the tags.
    "Hello World front React!"
);
// heading is an Object
// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering the root
// It is just putting the parent/heading elements inside the root tag
// root.render(heading);
*/
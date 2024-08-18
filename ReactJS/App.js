import React from "react";
import ReactDOM from "react-dom/client";

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
// https://developer.mozilla.org/en-US/docs/Web/API/Document

let newElement = document.createElement("h2"); 
newElement.textContent = "Hello, I am H2 tag"
document.querySelector("body").appendChild(newElement)

let a = document.createElement("p");
a.textContent = "There are some advantages of react"
document.querySelector("body").appendChild(a)
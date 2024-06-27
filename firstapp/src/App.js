import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import ClassHeader from './components/ClassHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

// const name = <span>Hello React</span>

// // Without JSX
// const newElement = React.createElement('h2', {className: 'newElement'}, 'Hello again');

// // create function
// // function test() {}
// // const test = function() {alert("Hello Rahul")}
// const test = () => {alert("Hello Rahul")}

// functional component
// const age = function(a) {
//   if(a > 18) return <span>Your are eligible</span>; // JSX syntax
//   else return <span>Your are not eligible</span>;
// }

// function App() {
//   return (
//     <div className="App">
//       {/* JSX Syntax */}
//       <h1>Hello Rahul Singh, {name}</h1>
//       {/* without jsx */}
//       {newElement}
//       <button onClick={test} className="btn">{age(16)}Click</button>
//     </div>
//   );
// }



// class component
// class App extends React.Component{ // Component is a class within React component
//   render() {
//     return <h1>Hello, class component</h1>
//   }
// }

class App extends React.Component{ // Component is a class within React component
  render() {
    return (
      <div className="App">
      {/* given name attribute in Header component
      values of name attribute display through props property 
      props is immutable*/}
        <Header name = "Rahul" last = "Singh"/> {/* Here html tag itself component */}
        <Header name = "Nitesh" last = "Singh"/>
        <Header name = "Harsh">
        {/* in between component tag, all these are treat as children */}
          <p>Harsh is a good boy</p>
          <a href=''>click here</a> {/* hyperlink */}
        </Header>
        <ClassHeader/>
        <ClassHeader name = "Rahul" last = "Singh"/>

        <Channel/>
        <FunctionClick/>

        <CFunctionClick roll = "22"/>
      </div>
    );
  }
}

export default App; 

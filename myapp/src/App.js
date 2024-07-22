import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import ClassHeader from './components/ClassHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appstyle.css';
import Style from './appstyle.module.css';
import Form from './components/Form';
import Routing from './components/Routing';
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Counter from './components/Counter';
import HookCounter from './components/HookCounter';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';
import ClassCounterOne from './components/ClassCounterOne';
import FunctionCounterOne from './components/FunctionCounterOne';
import ClassMouse from './components/ClassMouse';
import FClassMouse from './components/FClassMouse';
import A from './components/A';
import Vikas from './components/Vikas';
import Ajay from './components/Ajay';
import Susant from './components/Susant';

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
    const numbers = [3,4,5,6];
    return (
      // <div className="App">
      // {/* given name attribute in Header component
      // values of name attribute display through props property 
      // props is immutable*/}
      //   <Header name = "Rahul" last = "Singh"/> {/* Here html tag itself component */}
      //   <Header name = "Nitesh" last = "Singh"/>
      //   <Header name = "Harsh">
      //   {/* in between component tag, all these are treat as children */}
      //     <p>Harsh is a good boy</p>
      //     <a href=''>click here</a> {/* hyperlink */}
      //   </Header>
      //   {/* <ClassHeader/> */}
      //   <ClassHeader name = "Rahul" last = "Singh"/>

      //   <Channel/>
      //   <FunctionClick/>
      //   <CFunctionClick roll = "22" numbers = {numbers}/>
      // </div>
      <div className='App'>
         {/* <h1 className={Style.success}>Green</h1>
         <h1 className='error'>Error</h1>
         <Stylesheet isvalue={false}></Stylesheet>
         <Inline></Inline> */}
         {/* <Form></Form>
         <Routing></Routing> */}
         {/* <LifeCycleA /> */}
         {/* <Product /> */}
         {/* <PostList /> */}
         {/* <PostForm /> */}
         {/* <Counter></Counter> */}
         {/* <HookCounter /> */}
         {/* <HookObject></HookObject> */}
         {/* <HookArray></HookArray> */}
         {/* <ClassCounterOne/>
         <FunctionCounterOne/> */}
         {/* <ClassMouse /> */}
         {/* <FClassMouse/> */}
         {/* <A /> */}
         <Vikas/>
         <Ajay/>
         <Susant/>
      </div>
    );
  }
}

export default App; 
import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link} 
    from 'react-router-dom';

export default function Routing() {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
        {/* Switch is not available till now So, alternative is Routes */}
        <Routes>
            {/* child component */}
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/about' element={<About/>}>
                {/* <About></About> call component in Switch */}
            </Route>
            <Route path='/users' element = {<Users/>}>
                {/* <Users></Users> call component in Switch*/}
            </Route>
        </Routes>
    </Router>
  )
}

// another functional components
function Home() {
    return <h1>Hello</h1>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}
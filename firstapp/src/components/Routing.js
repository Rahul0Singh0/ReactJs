import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route,
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
        <Switch>
            {/* child component */}
            <Route path='/'>
                <Home></Home>
            </Route>
            <Route path='/about'>
                <About></About> {/*call component */}
            </Route>
            <Route path='/Users'>
                <Users></Users> {/*call component */}
            </Route>
        </Switch>
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
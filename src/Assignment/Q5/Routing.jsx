import React from 'react'
import Home from './Home'
import Login from './Login'
import { BrowserRouter,Link,NavLink,Route,Routes } from 'react-router-dom'
// 5.Routing: Scenario: Create a simple multi-page application with two routes. Implement navigation between these routes using React Router.
const Routing = () => {
  return (
    <div> 
        <Link to="/" className='mx-3'>Home</Link>
        <Link to="/login">Login</Link>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes> 

    </div>
  )
}

export default Routing
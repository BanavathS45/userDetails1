import React from 'react'
import { NavLink,  Link } from "react-router-dom";
import './dyanamic.css'
const RouteringFile = () => {
  return (
    <div className='bg-primary w-100 d-flex align-items-center '>
    <span style={{background:"blue",color:"white"}}>React_07</span>
    <div className="nav d-flex justify-content-end w-100 align-items-center ">

    <NavLink to="/" className="text-white" >Home</NavLink>
    <NavLink to="/about" className="text-white">About</NavLink>
    <NavLink to="/contact" className="text-white">Contact</NavLink>
    </div>
  </div>
  )
}

export default RouteringFile

 

 
 
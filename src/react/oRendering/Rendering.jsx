import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
// 14. Conditional Rendering: Scenario: Implement conditional rendering in React to display different components based on a certain condition. For instance, display a login form if the user is not authenticated, otherwise show a welcome message
const Rendering = () => {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const isEmail=(e)=>{
setEmail(e.target.value)
    }
    const ispassword=(e)=>{
        setPassword(e.target.value)
    }
    const navigate=useNavigate()
  const isLoging=()=>{
 
if(email=="prashanthr803@gmail.com" && password=="123456"){
 
navigate('/reLogin')
}
else{
    alert("login")
    navigate('/')
}

}
  

  return (
    <center> 
        <form action="#" className='col-6'>
            <h2 >Login Form</h2>
            <input className='form-control mt-2 mb-2' type="text" placeholder='Enter Email' onChange={isEmail} value={email} />
            <input  className='form-control' type="password" placeholder='Enter Password'   onChange={ispassword} value={password} />
            <button className='btn btn-success mt-3' onClick={isLoging} >Login</button>
        </form>
    </center>
  )
}

export default Rendering
import React, { useState } from 'react'
//2. Form Handling: Scenario: Create a form component with input fields for a username and password. Implement state management to handle user input and validate the form on submission.
const style={diplay:"none"}
const FormHandle = () => {
    const[user,userName]=useState("")
    const [password,setPassword]=useState('')
    const[isValidPassword,setIsValidPassword]=useState(true)
    const userNameHandle=(e)=>{   
        userName(e.target.value)
    }
    const submitHandle=(e)=>{
        e.preventDefault();
        if(userName.length===0 || password.length===0){
            alert("Please fill out all fields")
            }
         if(!user  == "" && !isValidPassword == "") {
            
            if(user.length >=5 && isValidPassword){
                alert("Submit successfull!!!")
            }
          
            else(
               alert("Username or Password is incorrect")
           )
         } 
            
        }
     
    const userPasswordHandle=(e)=>{
        
        const pswValue=e.target.value;
        setPassword(pswValue)
      
 
            const  redpassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            setIsValidPassword(redpassword.test(pswValue))
   
            
         
    }
  return (
    <div className='col-3 form'>
        <h2>Form Handle</h2>
        <input type="text" placeholder='Enter UserName' value={user} className='form-control' required onChange={userNameHandle}/>  
        {
            (user.length <= 5?<p style={{color:"red"}}>please Enter 5 Charctors </p>: <p style={{color:"green"}}>Vaild</p>  )
        }
        <input type="password" placeholder='Enter Password' className='form-control' required value={password} onChange={userPasswordHandle} /> 
        {
 
        (!isValidPassword)&&(<p style={{color:"red"  }}
        >Enter Vaild Passward </p>) 
           
        
        }{ 
        (isValidPassword == true ) && <p style={{color:"green" }}>Vaild Password</p>  
        }
        <button className='btn btn-success' onClick={submitHandle}  >Submit</button>
    </div>
  )
}

export default FormHandle
import React, { useState } from 'react'
// 3. State and Props: Scenario: Create a React component that receives a prop and uses it to initialize its state.Update the state based on user interactions and display the result.
const StateAndProps = (props) => {
  const [name,setName]=useState(props.fname)
  const handleClick=()=>{
    setName(props.lname)
  }
  return (
    <div> 
      <h1>My name is {name}</h1>
      <button className='btn btn-primary' onClick={handleClick}>click lname</button>
    </div>
  )
}

export default StateAndProps
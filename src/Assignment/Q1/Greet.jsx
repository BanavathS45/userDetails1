import React from 'react'
import UserGreet from './UserGreet'
import GeustGreet from './GeustGreet'
// 1.Conditional Rendering: Scenario: You have a component that should render different content based on a prop. Implement the component to conditionally render different text when the prop is true or false.

const Greet = (props) => {
  const islogedin=props.islogedin;   
      if(islogedin){
          return(
           <div>
            <h2>Conditional Rendering</h2>
              <UserGreet name={"Prashanth"}/>
            </div>
            )
          }
          return(
           <div>
             <GeustGreet/> 
          </div>
      ) 
}
export default Greet
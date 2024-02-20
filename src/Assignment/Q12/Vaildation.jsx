import React from 'react'
import DynamicFrom from './DynamicFrom'
// import DynamicFrom from '../../stores/components/Q11/Registar'
 export const formVaild=[
    {
        id:"username",
        label:"UserName",
        type:"text",
        validation:{
            isVaild:(value)=>value &&value.length>=3,massage:"UserName must have 3 Characters",success:"Valid"
        }
    },
    {
        id:"email",
        label:"email",
        type:"email",
        validation:{
            isVaild:(value)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),massage:"Wrong Email",success:"Valid"
        }
    },
    {
        id:"password",
        label:"password",
        type:"password",
        validation:{
            isVaild:(value)=>/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value),massage:"Wrong Password",success:"Valid"
        },
       
        
    },

]
const Validation = () => {
  return (
    <div>
      <DynamicFrom propFrom={formVaild}/> 
        </div>
  )
}

export default Validation
 
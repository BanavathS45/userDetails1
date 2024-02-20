import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
// 3.API Integration: Scenario: Fetch data from a mock API (or a real one if available) and display it in a component. Handle loading and error states appropriately.
const Api = () => {
  const[data,setData]=useState([])
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState(null)

   
useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((reponse)=>{
    setData(reponse.data)
    setloading(false)

  })
  .catch(error=>{seterror(error)
  setloading(false)
  })
 
},[])
if(loading){
  return <h2>Loading...</h2>
}
if(error){
  return <h2 style={{color:"red"}}>Error:{error.meassage}</h2>
}
  return (
    <div> 
      <h2>API Integration</h2>
     {data.length>0 && data.map((per)=>{
       return(

        <div key={per.id}>
          <h6>{per.username}</h6>
        </div>
       )
   
     })}   
     
    </div>
  )
}

export default Api
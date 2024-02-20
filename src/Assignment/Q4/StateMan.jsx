import React,{useState} from 'react'
// 4.State Management: Scenario: Build a counter component that can increment, decrement, and reset. Use React state to manage the counter value.
const StateMan = () => {
    const [count, setCount] = useState(0)
    const Decrement=()=>{
        setCount(count-1)
    }
    const Increment=()=>{
        setCount(count+1)
    }
  return (
    <div> 
        <h2>State Managment in React</h2>
        <h2 className='ms-5'> {count}</h2> 
        <button className='mx-3' onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default StateMan
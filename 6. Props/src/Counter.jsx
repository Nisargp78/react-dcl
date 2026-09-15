import React, { useState } from 'react'

const Counter = () => {
  let [count, setCount] = useState(0);
  let inc = () =>{
    setCount(count+1)
  }
  let dec = () =>{
    setCount(count-1)
  }
  let reset = () =>{
    setCount(0)
  }
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Increment</button>
      <button onClick={reset}>Increment</button>
    </div>
  )
}

export default Counter
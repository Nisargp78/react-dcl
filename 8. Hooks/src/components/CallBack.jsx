import React, { useCallback, useState } from 'react'
import Child1 from './Child1';

const CallBack = () => {
  let [count, setCount] = useState(0);
  console.log("Parent");
  
  let temp = useCallback(()=>{
    console.log("temp function");
  },[])
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=> setCount(count+1)}>Inc</button>
      <Child1 temp={temp} />
    </div>
  )
}

export default CallBack
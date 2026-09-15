import React, { useMemo, useState } from 'react'

const Memo = () => {
  let [count, setCount] = useState(0)
  let [number,setNumber] = useState(0)
  
  let result = useMemo(()=>{
    console.log("Calculation is running");
    return count*2;
  },[count])
  return (
    <div>
      <h1>Result is {result}</h1>
      <input type='number' value={number} onChange={(e)=> setNumber(e.target.value)} />
      <br />
      <button onClick={()=> setCount(count+1)}>Count is {count}</button>
    </div>
  )
}

export default Memo
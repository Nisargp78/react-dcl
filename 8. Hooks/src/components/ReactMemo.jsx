import React, { useCallback, useState } from 'react'
import Child1 from './Child1';

const ReactMemo = () => {
  let [count, setCount] = useState(0);
  console.log("Parent");
  
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=> setCount(count+1)}>Inc</button>
      <Child1 />
    </div>
  )
}

export default ReactMemo
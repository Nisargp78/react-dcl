import React, { useEffect, useState } from 'react'

const EffectEx = () => {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  console.log("This is Effect Component");
  // ! No dependency
  useEffect(()=>{
    console.log("This is useEffect without dependency");
  });
  // ! Empty array dependency
  useEffect(()=>{
    console.log("This is useEffect with empty array dependency");
  },[])
  // ! array dependency
    useEffect(()=>{
    console.log("This is useEffect with empty array dependency");
  },[count2])
  return (
    <div>
      <h1 onClick={()=> setCount(count+1)}>The count is {count}</h1>
      <h1 onClick={()=> setCount2(count2+1)}>The count2 is {count2}</h1>
    </div>
  )
}

export default EffectEx
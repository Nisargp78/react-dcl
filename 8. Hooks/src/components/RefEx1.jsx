import React, { useRef, useState } from "react";

const RefEx1 = () => {
  let [count, setCount] = useState(0);
  let ref1 = useRef(0);

  console.log(ref1.current);
  console.log("rerender");

  let inc = () => {
    ref1.current++;
    console.log(ref1.current);
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>The ref value is {ref1.current}</h1>
      <button onClick={inc}>Increment variable</button>
      <button onClick={()=> setCount(count+1)}>Increment Count</button>
    </div>
  );
};

export default RefEx1;

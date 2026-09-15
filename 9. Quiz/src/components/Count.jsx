import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  let increment = () => {
    setCount((prev) => {
      return prev +1;
    })
    setCount((prev) => {
      return prev +1;
    })
    setCount((prev) => {
      return prev +1;
    })
  }
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default Count;

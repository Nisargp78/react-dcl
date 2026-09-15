import React from "react";

const Child1 = ({setCount , count }) => {
  let handleAddCount = () => {
    setCount(count + 1);
  };
  let handleDecCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={() => handleAddCount()}>+</button>
      <button onClick={() => handleDecCount()}>-</button>
    </div>
  );
};

export default Child1;

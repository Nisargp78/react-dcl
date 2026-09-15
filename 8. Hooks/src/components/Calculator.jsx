import React, { useRef, useState } from "react";

const Calculator = () => {
  let num1 = useRef(0);
  let num2 = useRef(0);
  let [result, setResult] = useState(0);
  let handleAdd = () => {
    let answer = Number(num1.current.value) + Number(num2.current.value);
    setResult(answer);
    erase();
  };
  let handleSub = () => {
    let answer = num1.current.value - num2.current.value;
    setResult(answer);
    erase();
  };
  let handleMul = () => {
    let answer = num1.current.value * num2.current.value;
    setResult(answer);
    erase();
  };
  let handleDiv = () => {
    let answer = num1.current.value / num2.current.value;
    setResult(answer);
    erase();
  };
  let erase = () =>{
    num1.current.value = "";
    num2.current.value = "";
  }

  return (
    <div className="flex flex-col gap-10 h-screen justify-center items-center border-2">
      <div className="flex flex-col w-100 gap-10  border-4 p-4">
        <input type="number" className="border-2 p-2" ref={num1} />
        <input type="number" className="border-2 p-2" ref={num2} />
      </div>
      <div className="flex gap-4">
        <button className="border-2 p-2 w-10" onClick={handleAdd}>
          +
        </button>
        <button className="border-2 p-2 w-10" onClick={handleSub}>-</button>
        <button className="border-2 p-2 w-10" onClick={handleMul}>*</button>
        <button className="border-2 p-2 w-10" onClick={handleDiv}>/</button>
      </div>
      <div>
        <p>Result is {result}</p>
      </div>
    </div>
  );
};

export default Calculator;

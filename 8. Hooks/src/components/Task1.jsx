import React, { useState } from 'react'

const Task1 = () => {
  let [name, setName] = useState("Nisarg");
  let newName = (selectedName) => {
    setName(selectedName);
  } 
  return (
    <div>
      <h1>Name is {name}</h1>
      <button onClick={() => newName("Nisarg")}>Nisarg</button>
      <button onClick={() => newName("Pranav")}>Pranav</button>
      <button onClick={() => newName("Ritesh")}>Ritesh</button>
    </div>
  )
}

export default Task1
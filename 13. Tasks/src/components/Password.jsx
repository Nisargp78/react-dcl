import React, { useState } from 'react'
import { LuEye, LuEyeClosed } from 'react-icons/lu';

const Password = () => {
  let [show,setShow]= useState();
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <input type={show? "text" : "password"} />
      <button onClick={() => setShow(!show)} >{show? <LuEyeClosed /> : <LuEye/>}</button>
    </div>
  )
}

export default Password
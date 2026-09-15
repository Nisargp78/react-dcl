import React, { useRef } from 'react'

const RefEx2 = () => {
  let myRef = useRef(0)
  console.log(myRef.current);
  let demo = ()=>{
    myRef.current.innerText = "Hii"
    myRef.current.style.background = "Red"
  }

  return (
    <div className='p-10'>
      <h1 ref={myRef} className='text-2xl p-4'>Hello</h1>
      <button onClick={() => demo()} className='w-20 border-2 bg-amber-800 mt-2 p-4'>Click</button>
    </div>
  )
}

export default RefEx2
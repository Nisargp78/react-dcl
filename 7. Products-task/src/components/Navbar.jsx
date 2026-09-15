import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-900 p-6 h-28 text-white text-3xl'>
      <div>
        <h1 className='text-cyan-200'>Amazon</h1>
      </div>
      <div className='flex gap-10'>
        <p>Products</p>
      </div>
    </div>
  )
}

export default Navbar
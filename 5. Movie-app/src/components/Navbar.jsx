import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-900 p-6 h-28 text-white text-3xl'>
      <div>
        <h1 className='text-red-700'>NETFLIX</h1>
      </div>
      <div className='flex gap-10'>
        <Link to="/">Movies</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  )
}

export default Navbar
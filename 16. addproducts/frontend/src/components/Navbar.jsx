import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div>
          <h1 className="cursor-default text-2xl font-extrabold tracking-tight text-ink"><span className="text-indigo">A</span>mazon</h1>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium sm:gap-6">
          <Link to="/" className="rounded-lg px-3 py-2 text-ink-muted transition-colors duration-200 hover:bg-indigo/5 hover:text-indigo">Add Products</Link>
          <Link to="/products" className="rounded-lg px-3 py-2 text-ink-muted transition-colors duration-200 hover:bg-indigo/5 hover:text-indigo">Products</Link>
          <Link to="/cart" aria-label="Shopping cart" className="rounded-lg p-2 text-xl text-ink-muted transition-colors duration-200 hover:bg-indigo/5 hover:text-indigo"><IoCartOutline /></Link>
          <Link to="/signup" className="rounded-lg bg-indigo px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-violet hover:shadow-md active:scale-95">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

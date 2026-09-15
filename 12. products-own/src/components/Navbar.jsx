import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-20 p-8 bg-slate-800 text-white border-b-2">
      <div className="font-bold text-3xl ">
        <h1>Amazon</h1>
      </div>
      <div className="flex gap-15 text-xl">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

function Navbar() {
  return (
    <div className="bg-blue-500 text-white p-5 flex justify-between">
      <div className="flex items-end gap-2">
        <img src="" alt="" className="w-10 h-auto rounded-lg" />
        <h1 className="text-lg font-bold">Recipe App</h1>
      </div>

      <nav className="flex gap-2">
        <a href=""> Home</a>
        <a href=""> About</a>
      </nav>
    </div>
  );
}

export default Navbar;

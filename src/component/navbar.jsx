import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 dark:bg-black p-4 shadow-md">
      <div className="flex space-x-6 justify-between">
        <div className="text-2xl font-bold text-green-500 dark:text-green-400">
         <img src="/logo.png" alt="" 
         className="h-15 w-15 rounded-full"/>
        </div>
        <button className="text-gray-800 dark:text-white hover:text-green-500 transition">
          Home
        </button>
        <button className="text-gray-800 dark:text-white hover:text-green-500 transition">
          Namaz Time
        </button>
     
        <button className="text-gray-800 dark:text-white hover:text-green-500 transition">
          About
        </button>
        <button className="text-gray-800 dark:text-white hover:text-green-500 transition">
          Acknowledgement
        </button>
           <button className="text-gray-800 dark:text-white hover:text-green-500 transition">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

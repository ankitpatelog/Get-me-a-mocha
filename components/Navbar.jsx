import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-300  h-14 px-5 flex items-center justify-between fixed  top-0 left-0 w-full z-50
">
      {/* Left side: logo + menu items */}
      <ul className="flex items-center gap-8">
        <li>
          <img
            src="assets/mocha.png"
            alt="mocha-logo"
            className="h-13 w-13  ring-green-500/60 hover:ring-green-400 hover:scale-105 transition-all duration-300"
          />
        </li>

        <li className="font-sans text-lg text-gray-800">Home</li>
        <li className="font-sans text-lg text-gray-800">About Us</li>
        <li className="font-sans text-lg text-gray-800">Contact Us</li>
      </ul>

      {/* Right side: buttons */}
      <div className="flex gap-7 mr-5">


        <Link href="/login">
         <button
          type="button"
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700
          text-white font-semibold px-5 py-2.5 rounded-xl
          shadow-lg shadow-green-700/40 transition-all duration-300
          hover:scale-105 hover:shadow-xl hover:from-green-700 hover:to-green-800">
          Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"/>
          </svg>
        </button>
        </Link>


       

        


        <a href="https://github.com/ankitpatelog/Get-me-a-mocha/tree/main/getmeamocha">
        <button
          type="button"
          className="flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900
         text-white font-semibold px-5 py-2.5 rounded-xl
         shadow-lg shadow-gray-700/50 transition-all duration-300
         hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-black"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.77c-1.09-.74.09-.73.09-.73a2.52 2.52 0 011.83 1.23 2.57 2.57 0 003.5 1 2.56 2.56 0 01.76-1.6C7.17 17.52 4.37 16.47 4.37 11.7a4.65 4.65 0 011.24-3.22 4.32 4.32 0 01.12-3.18s1.02-.33 3.34 1.24a11.57 11.57 0 016.08 0c2.32-1.57 3.34-1.24 3.34-1.24a4.32 4.32 0 01.12 3.18 4.65 4.65 0 011.24 3.22c0 4.79-2.81 5.81-5.48 6.12a2.89 2.89 0 01.83 2.23v3.3c0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
          </svg>
          GitHub
        </button>
        </a>




      </div>
    </nav>
  );
};

export default Navbar;

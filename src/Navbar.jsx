// src/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="nav-head" className="bg-transparent max-w-screen-lg mx-auto top-0 md:rounded-full left-0 right-0 w-full lg:top-5 flex items-center z-10 justify-center fixed">
      <div className="container w-full">
        <div className="flex items-center justify-between lg:w-full">
          <div className="px-4">
            <a className="font-bold font-sans text-lg text-sky-600 block py-6 tracking-wider md:opacity-0" href="#Home">Rizz</a>
          </div>
          <div className="flex items-center px-4 m-auto">
            <button
              id="burger"
              name="burger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={toggleMenu}
            >
              <span className="origin-top-left w-[30px] h-[2px] my-2 block bg-sky-950 transition duration-300 ease-in-out"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-sky-950 transition duration-300 ease-in-out"></span>
              <span className="origin-bottom-left w-[30px] h-[2px] my-2 block bg-sky-950 transition duration-300 ease-in-out"></span>
            </button>
            <nav className={`${isOpen ? 'block' : 'hidden'} absolute p-4 right-4 top-20 py-5 bg-slate-100 shadow-lg rounded-lg max-w-[250px] w-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none`} id="nav-menu">
              <ul className="block lg:flex ">
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group lg:hover:bg-none">
                  <a className="mt-4 font-medium font-sans text-black group-hover:text-sky-600" href="#aboutme">About Me 🔍
                    <div className="rounded-lg w-full h-0.5 bg-sky-600/80 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group">
                  <a className="mt-4 font-medium font-sans group-hover:text-sky-600" href="#uiux">UI/UX Designer 🎨
                    <div className="rounded-lg w-full h-0.5 bg-sky-600/80 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group">
                  <a className="mt-4 font-medium font-sans group-hover:text-sky-600" href="#nodes">Blockchain Validator 🔐
                    <div className="rounded-lg w-full h-0.5 bg-sky-600/80 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div id='new element' className="px-4 hidden lg:block">
            <a className="" href="#Home">
              <button onClick={()=>{
                window.location.href = 'mailto:rizky230504@gmail.com';
              }} className="overflow-hidden flex animate-float buttons bottom-40 w-fullitems-center 
                  border border-sky-500 px-4 py-4 rounded-full items-center  shadow-sky-400 font-semibold shadow-sm hover:bg-slate-100 backdrop-blur-md hover:shadow-sky-500 hover:shadow-sm hover:text-sky-400">
                
                <h1>
                  Get in Touch
                </h1>
                
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

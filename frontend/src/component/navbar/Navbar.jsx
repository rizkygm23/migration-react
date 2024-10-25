// src/Navbar.jsx
import React, { useState } from 'react';
import Toggledark from '../../toggle/toggledark';
import ToggledarkXl from '../../toggle/toggledark';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parsePath = useLocation().pathname;
  let isVisible = ''
    
  if (parsePath === "/node" || parsePath === "/uiux" ) {
    isVisible = 'hidden';
    localStorage.setItem('theme', 'dark');
  }


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
    <header id="nav-head" className="bg-transparent max-w-screen-xl mx-auto top-0 md:rounded-full left-0 right-0 w-full lg:top-5 flex items-center z-10 justify-center fixed">
      <div className="container w-full">
        <div className="flex dark:text-[#58A6AB] items-center justify-between lg:w-full">
          <div className="px-4 md:before:flex-auto">
            <a className="font-bold font-sans text-lg text-sky-600 dark:text-[#58A6AB]  block py-6 tracking-wider md:opacity-0" href="#Home">Rizz</a>
          </div>
          <div className="flex items-center px-4 w-full ">
            <button
              id="burger"
              name="burger"
              type="button"
              className="block absolute right-4 lg:hidden"
              onClick={toggleMenu}
            >
              <span className="origin-top-left w-[30px] h-[2px] my-2 block bg-sky-950 dark:bg-slate-100 transition duration-300 ease-in-out"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-sky-950 transition dark:bg-slate-100 duration-300 ease-in-out"></span>
              <span className="origin-bottom-left w-[30px] h-[2px] my-2 block bg-sky-950 dark:bg-slate-100 transition duration-300 ease-in-out"></span>
            </button>
            <nav className={`${isOpen ? 'block' : 'hidden'}  absolute p-4 right-4 top-20 py-5  bg-slate-100 dark:bg-slate-800 dark:lg:bg-transparent shadow-lg rounded-lg  max-w-fit lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none `} id="nav-menu">
              <ul className="block lg:flex max-w-fit ">
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group md:hover:bg-transparent items-center">
                  <a className="my-auto font-medium font-sans text-black dark:text-[#58A6AB] group-hover:text-sky-500 dark:group-hover:text-[#58A6AB]" href="/#aboutme">Services 🔍
                    <div className="rounded-lg w-full h-0.5 bg-sky-500 dark:bg-[#58A6AB] scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group md:hover:bg-transparent">
                  <a className="my-auto font-medium font-sans group-hover:text-sky-500 dark:group-hover:text-[#58A6AB]" href="/#uiux">UI/UX Designer 🎨
                    <div className="rounded-lg w-full h-0.5 bg-sky-500 dark:bg-[#58A6AB] scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
                <li className="py-3 px-3 rounded-lg hover:bg-slate-200 group md:hover:bg-transparent">
                  <a className="my-auto font-medium font-sans group-hover:text-sky-500 dark:group-hover:text-[#58A6AB]" href="/#nodes">Blockchain Validator 🔐
                    <div className="rounded-lg w-full h-0.5 bg-sky-500 dark:bg-[#58A6AB] scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out group-hover:h-1"></div>
                  </a>
                </li>
                <div className={`py-3 px-3 rounded-lg mr-1 ${isVisible} hover:bg-slate-200 group md:hover:bg-transparent right-0`}>
                  <Toggledark  />
                </div>

        

              </ul>

              
            </nav>
          </div>

          <div id='new element' className="px-4 hidden  lg:flex min-w-64 md:flex-row-reverse ">
            {/* <div className="py-3 hidden  lg:flex px-3 rounded-lg hover:bg-slate-200 group md:hover:bg-transparent right-0">
                  <ToggledarkXl />
                </div> */}
            <a className="" href="#Home">
              <button onClick={()=>{
                window.location.href = 'mailto:rizky230504@gmail.com';
              }} className="overflow-hidden bg-gradient-to-r from-[#0acffe] to-[#495aff] dark:from-[#007adf] dark:to-[#00ecbc]  dark:hover:border-[#2D585A] flex dark:hover:bg-[#58A6AB] animate-float text-sky-900 buttons bottom-40 w-full items-center border  px-4 py-4 rounded-full   shadow-sky-400 font-semibold shadow-sm hover:bg-slate-100 backdrop-blur-md hover:shadow-sky-500 hover:shadow-sm dark:shadow-none dark:text-[#0B0B1D] dark:border-0">
                
                <h1 className='font-normal text-base'>
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

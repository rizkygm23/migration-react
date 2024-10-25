// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
import ButtonMore from './Btn_more';
const Cardnodes = ({ title, description, imageUrl, buttonImageUrl, moreUrl, status, noluup, luup, role}) => {
    var classStatus =''
    var divStatus = ''
    
   
    if(status=='Mainnet'){
        classStatus = 'h-4 w-4 bg-green-700 rounded-full mr-2'
        divStatus = 'bg-green-100 border-green-400'
    }else{
        classStatus = 'h-4 w-4 bg-yellow-700 rounded-full mr-2'
        divStatus = 'bg-yellow-100 border-yellow-400'
    }

  return (
    <motion.div 
    variants={fadeIn("right", 0.2, 0.1)}
              initial={"hidden"}
             
              whileInView={"show"}
              viewport={{once:false, amount:0.01}}
    className={`relative card mt-10 rounded-3xl delay-100 ${noluup} ${luup} duration-300 overflow-hidden  max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200`}>
      <div className="relative w-full h-64 ">
        <img className="absolute  inset-0 w-full h-full object-cover bg-sky-100 md:blur-sm hover:blur-0" src={imageUrl} alt="img" />
        
        <div className={`absolute rounded-lg px-4 left-8 top-8 border  flex items-center ${divStatus} my-auto`}>
        <div className={`h-4 w-4 ${classStatus} rounded-full mr-2 `}></div>
          <h2 className='text-center' >{status}</h2>
        </div>
        <div className={`absolute rounded-lg px-4 left-8 top-16 border  flex items-center ${divStatus} my-auto`}>
        <div className={`h-4 w-4 ${classStatus} rounded-full mr-2 `}></div>
          <h2 className='text-center' >{role}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2">
          <h1 className="text-2xl font-sans font-semibold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] mt-auto mb-auto">{title}</h1>
          <a className="ml-auto" href={moreUrl} target="_blank" rel="noopener noreferrer">
            <button className="dark:bg-[#58A6AB] rounded-full w-16 h-16 ml-auto hover:bg-slate-200 hover:-rotate-45 hover:transition-transform ease-in-out">
              <img className="max-w-6 mx-auto" src={buttonImageUrl} alt="" />
            </button>
          </a>
        </div>
        <p className="mt-3 line-clamp-3 min-h-line font-sans font-light text-balance dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-[#d7d2cc] to-[#304352] text-justify text-xl">{description}</p>
      </div>
      

    </motion.div>
  );
};

export default Cardnodes;

// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
const Cardnodes = ({ title, description, imageUrl, buttonImageUrl, moreUrl, status }) => {
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
    className="relative card mt-10 rounded-3xl delay-100 duration-300 overflow-hidden bg-sky-100 max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
      <div className="relative w-full h-64">
        <img className="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt="img" />
        
        <div className={`absolute rounded-lg px-4 right-8 top-8 border  flex items-center ${divStatus} my-auto`}>
        <div className={`h-4 w-4 ${classStatus} rounded-full mr-2 `}></div>
        <h2 className='text-center' >{status}</h2>

        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2">
          <h1 className="text-2xl font-sans font-semibold text-slate-600 mt-auto mb-auto">{title}</h1>
          <a className="ml-auto" href={moreUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-slate-300/60 rounded-full w-16 h-16 ml-auto hover:bg-slate-200 hover:-rotate-45 hover:transition-transform ease-in-out">
              <img className="max-w-6 mx-auto" src={buttonImageUrl} alt="" />
            </button>
          </a>
        </div>
        <h2 className="mt-3 line-clamp-3 min-h-line font-sans font-medium text-balance text-slate-500 text-justify text-xl">{description}</h2>
      </div>
    </motion.div>
  );
};

export default Cardnodes;

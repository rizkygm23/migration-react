// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';


const Card = ({ title, description, imageUrl, buttonImageUrl, moreUrl, dfdfd }) => {
  return (
    <motion.div 
    variants={fadeIn("right", 0.2, 0.1)}
              initial={"hidden"}
             
              whileInView={"show"}
              viewport={{once:false, amount:0.01}}
              
    className={`relative card mt-10 rounded-3xl ${dfdfd} delay-100 duration-300 overflow-hidden  max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200`}>
      <div className="relative w-full h-64">
        <img className="absolute inset-0 w-full h-full object-cover" src={imageUrl} alt="img" />

      </div>
      <div className="p-6">
        <div className="grid grid-cols-2">
          <h1 className="text-2xl font-sans font-semibold dark:text-[#58A6AB] mt-auto mb-auto">{title}</h1>
          <a className="ml-auto" href={moreUrl} target="_blank" rel="noopener noreferrer">
            <button className="dark:bg-[#58A6AB] rounded-full w-16 h-16 ml-auto hover:bg-slate-200 hover:-rotate-45 hover:transition-transform ease-in-out">
              <img className="max-w-6 mx-auto" src={buttonImageUrl} alt="" />
            </button>
          </a>
        </div>
        <h2 className="mt-3 line-clamp-3 min-h-line font-sans font-light  text-balance dark:text-[#88ABAD] text-justify text-xl">{description}</h2>
      </div>
    </motion.div>
  );
};

export default Card;

// src/components/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';


const Cardmin = ({ moreUrl, imageUrl}) => {
  return (
    <motion.div 
    variants={fadeIn("right", 0.2, 0.1)}
              initial={"hidden"}
             
              whileInView={"show"}
              viewport={{once:false, amount:0.01}}
              
    className={`relative card mt-10 rounded-3xl  delay-100 duration-300 overflow-hidden  max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200`}>
    <a className='w-full h-full' href={moreUrl}>
    <div className="relative w-full h-64">
        <img className="absolute inset-0 w-full h-full object-cover blur-sm hover:blur-0 " src={imageUrl} alt="img" />
    </div>
    </a>

    </motion.div>
  );
};

export default Cardmin;

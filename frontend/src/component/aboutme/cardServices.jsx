// import DataServices from "./dataServices";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade'; 

const CardServices = ({ imgsrc, alt, delayy=0.1, heading, description }) => {
  return (
    
    <motion.div
      variants={fadeIn("up", delayy, 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="mt-10"
    >
        <div className='text-center sm:text-left flex flex-col h-full p-5 rounded-xl bg-gradient-to-r from-[#29323c] to-[#21262c]  dark:from-[#0B0B1D/0] dark:to-[#0B0B1D/0] max-w-screen-sm'>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
                <img  src={imgsrc} className='w-[100px] mx-auto sm:ml-1 ' alt={alt} />
                <h2 className='bg-clip-text mt-2 lg:mt-0 text-transparent bg-gradient-to-r from-[#f5f7fa] to-[#c3cfe2] my-auto  md:col-span-2 text-[24px] sm:text-[24px] font-semibold'>{heading}</h2>
            </div>
            <div className='mt-auto sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#d7d2cc] to-[#304352]'>
                <p>{description}</p>
            </div>
        </div>
    </motion.div>
  );
}

export default CardServices;

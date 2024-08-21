// src/components/UIUXSection.jsx
import React from 'react';
import Cardmin from './CardUIUXMin';
import cardData from '../../data/cardData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';


const Pageui = () => {
  const uiuxCards = cardData.filter(card => card.type === 'uiux');
  const limitindexs = 4;

  return (
    <motion.section 
    variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              
              whileInView={"show"}
              viewport={{once:false, amount:0.1}}
              
    id="uiux" className="justify-between md:max-w-screen-md container px-10 grid grid-cols-1 pt-36 lg:max-w-screen-xl mx-auto mt-20">
      <div>
        <h1 className="text-2xl font-sans font-bold dark:text-slate-200">UI/<span className="text-sky-500 dark:text-[#58A6AB]">UX</span> Designer.</h1>
        <h2 className="text-xl mt-1 font-sans font-medium text-[#6C6C6C]">All Works</h2>
      </div>
      <div className="bg-sky-500 dark:bg-[#58A6AB] h-2 mt-2 rounded-full"></div>
      <div id="card-UIUX" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {uiuxCards.map(card => (
          <Cardmin
            imageUrl={card.imageUrl}
            moreUrl={card.moreUrl}
          />
        ))}
      </div>
    </motion.section>
  );
};



export default Pageui;

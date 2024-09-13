// src/components/UIUXSection.jsx
import React from 'react';
import Card from '../UIUX_Section/Card';
import Cardnodes from './CardNode';
import cardData from '../../data/cardData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
import ButtonMore from './Btn_more';

const NodesSection = () => {
  const uiuxCards = cardData.filter(card => card.type === 'node');
  const limitindex = 4;

  return (
    <motion.section 
    variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              
              whileInView={"show"}
              viewport={{once:false, amount:0.1}}
    id="nodes" className="justify-between md:max-w-screen-md container px-10 grid grid-cols-1 pt-36 lg:max-w-screen-xl mx-auto mt-20">
      <div>
        <h1 className="text-2xl font-sans dark:text-slate-200 font-bold">Block<span className="text-sky-500 dark:text-[#58A6AB]">chain</span> Validator.</h1>
        <h2 className="text-xl mt-1 font-sans font-medium text-[#6C6C6C]">All Works</h2>
      </div>
      <div className="bg-sky-500 dark:bg-[#58A6AB] h-2 mt-2 rounded-full"></div>
      <div id="card-UIUX" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {uiuxCards.map((card, index) => (
          console.log(index),
          <Cardnodes
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            buttonImageUrl={card.buttonImageUrl}
            moreUrl={card.moreUrl}
            status={card.status}
            role={card.role}  
            
            noluup={`${index >= limitindex ? 'hidden' : index >= 3 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>
      <div>
      
    </div>
    <ButtonMore url={'/node'}/>
    </motion.section>

    
  );
};

export default NodesSection;

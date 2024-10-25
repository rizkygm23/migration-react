// src/components/UIUXSection.jsx
import React from 'react';
import Card from './Card';
import cardData from '../../data/cardData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
import ButtonMore from '../Node_Section/Btn_more';

const UIUXSection = () => {
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
        <h1 className="text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#0acffe] to-[#495aff] dark:from-[#007adf] dark:to-[#00ecbc] font-bold w-fit">UI/UX Designer</h1>
        <h2 className="text-xl mt-1 font-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#d7d2cc] to-[#304352]">All Works</h2>
      </div>
      <div className="bg-gradient-to-r from-[#0acffe] to-[#495aff] dark:from-[#007adf] dark:to-[#00ecbc] h-2 mt-2 rounded-full"></div>
      <div id="card-UIUX" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {uiuxCards.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            buttonImageUrl={card.buttonImageUrl}
            moreUrl={card.moreUrl}
            dfdfd={`${index >= limitindexs ? 'hidden' : index >= 3 ? 'hidden md:block' : ''}`}
          />
        ))}
      </div>
      <ButtonMore url={'/uiux'}/>
    </motion.section>
  );
};



export default UIUXSection;

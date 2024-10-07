// src/components/UIUXSection.jsx
import React from 'react';
import Card from '../UIUX_Section/Card';
import Cardnodes from './CardNode';
import cardData from '../../data/cardData';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
import ButtonMore from './Btn_more';
import CardnodeMin from './CardnodeMin';
import Bntnsa from '../../button/Bntnsa';
import Footer from '../Footer/Footer';

const NodePage = () => {
  const uiuxCards = cardData.filter(card => card.type === 'node');
  

  return (
    <>
    <motion.section 
    variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              
              whileInView={"show"}
              viewport={{once:false, amount:0.1}}
    id="nodes" className="justify-between md:max-w-screen-md container px-10 grid grid-cols-1 pt-10 lg:max-w-screen-xl mx-auto mt-20 bg-slate-100 bg-opacity-0">
      <div className='mx-auto text-center'>
        <h1 className=" text-3xl   md:text-7xl font-sans dark:text-slate-200  font-bold">Block<span className="text-sky-500 dark:text-[#58A6AB]">chain</span> Validator</h1>
        <p className="text-sm mt-5 font-sans font-medium text-[#6C6C6C] max-w-screen-md">A blockchain validator is a network node that helps process and validate transaction blocks on the platform so that they can be added to the permanent ledger of the blockchain. When using the term “validator,” some people presume the nodes validating transactions on PoS blockchains. They contrast it with the term “miner,” used on PoW blockchain platforms. <span><a href='https://phemex.com/academy/blockchain-validator-process' className="text-sky-500 dark:text-[#58A6AB]">Read More</a></span></p>
      </div>
      <div className="bg-sky-500 dark:bg-[#58A6AB] h-2 mt-2 rounded-full"></div>
      <div id="card-UIUX" className="container grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {uiuxCards.map(card => (
          
          <CardnodeMin
            key={card.title}
            title={card.title}
            imgsrc={card.miniImageUrl}
            detail={card.moreUrl}

          />
        ))},  

      </div>
      <div>
      
    </div>
    <Bntnsa/>


    <Footer/>
    

    
    </motion.section>
    
    </>

    
  );
};

export default NodePage;

// src/components/UIUXSection.jsx
import React from 'react';
import Card from './Card';
import Cardnodes from './CardNode';
import cardData from './cardData';


const NodesSection = () => {
  const uiuxCards = cardData.filter(card => card.type === 'node');

  return (
    <section id="nodes" className="justify-between container px-10 grid grid-cols-1 pt-36 max-w-screen-xl mx-auto mt-20">
      <div>
        <h1 className="text-2xl font-sans font-bold">Block<span className="text-sky-500">chain</span> Validator.</h1>
        <h2 className="text-xl mt-1 font-sans font-medium text-slate-600">All Works</h2>
      </div>
      <div className="bg-sky-500 h-2 mt-2 rounded-full"></div>
      <div id="card-UIUX" className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {uiuxCards.map(card => (
          <Cardnodes
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            buttonImageUrl={card.buttonImageUrl}
            moreUrl={card.moreUrl}
            status={card.status}
          />
        ))}
      </div>
    </section>
  );
};

export default NodesSection;

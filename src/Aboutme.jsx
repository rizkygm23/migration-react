// src/components/AboutMeSection.jsx
import React from 'react';

const AboutMeSection = () => {
  return (
    <section
      id="aboutme"
      className="scroll-smooth rounded-xl pt-36 pb-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto bg-gradient-to-b from-slate-300 to-slate-200"
    >
      <h1 className="text-2xl font-sans font-bold">
        About <span className="text-sky-500">Me.</span>
      </h1>
      <div className="bg-sky-500 mt-2 h-2 rounded-full"></div>
      <div className="bg-opacity-10 bg-sky-300 p-10 rounded-3xl mt-10 backdrop-blur-3xl border border-sky-300">
        <h2 className="text-sm font-sans font-medium text-slate-800 text-center sm:text-xl italic md:text-2xl lg:text-3xl">
          Hello! I'm an Information Technology student with a passion for innovative technology
          and design. Over the past year, I have dedicated myself to mastering the principles of UI/UX design, creating intuitive and engaging digital experiences. My journey into the world of Web3 began four years ago, where I have delved deep into decentralized technologies and their applications. Additionally, I have gained a solid year of hands-on experience in managing blockchain nodes, ensuring the integrity and security of blockchain networks.
        </h2>
      </div>
    </section>
  );
};

export default AboutMeSection;

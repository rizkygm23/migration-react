// src/components/ToolsSection.jsx
import React from 'react';
import vscode from './assets/images/vscode.png';
import flask from './assets/images/flask.png';
import css from './assets/images/css.png';
import html from './assets/images/html.png';
import bootstrap from './assets/images/bootstrap.png';
import figma from './assets/images/figma.png';
import mysql from './assets/images/mysql.png';
import tailwind from './assets/images/tailwind.png';
import python from './assets/images/python.png';
import javascript from './assets/images/javascript.png';
import github from './assets/images/github.png';
import termius from './assets/images/termius.png';
import { motion } from 'framer-motion';
import { fadeIn } from './fade';

const ToolsSection = () => (
  <motion.section

  id="tools" className="scroll-smooth pt-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-sans font-bold ">
      Tool<span className="text-sky-500">s</span> & Skills.
    </h1>
    <motion.div className="bg-sky-500 mt-2 h-2 rounded-full"></motion.div>
    <div className="bg-transparent grid grid-cols-3 gap-2 mt-6 lg:grid-cols-4">
      <motion.div
      variants={fadeIn("up", 0.3, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src='assets/images/react.png' alt="Visual Studio Code" />
      </motion.div>
      <motion.div
      variants={fadeIn("up", 0.4, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={vscode} alt="Visual Studio Code" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.5, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={flask} alt="Flask" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.6, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={css} alt="CSS" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.7, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={html} alt="HTML" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.8, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={bootstrap} alt="Bootstrap" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.9, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={figma} alt="Figma" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={mysql} alt="MySQL" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1.1, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={tailwind} alt="Tailwind CSS" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1.2, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={python} alt="Python" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1.3, 0.1)}
      initial="hidden"
      whileInView={"show"}
      
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={javascript} alt="JavaScript" />
      </motion.div>
      <motion.div
      variants={fadeIn("up", 1.4, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={github} alt="GitHub" />
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 1.5, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount:0.1}}
      className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={termius} alt="Termius" />
      </motion.div>
    </div>
  </motion.section>
);

export default ToolsSection;

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

const ToolsSection = () => (
  <section id="tools" className="scroll-smooth pt-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-sans font-bold ">
      Tool<span className="text-sky-500">s</span>
    </h1>
    <div className="bg-sky-500 mt-2 h-2 rounded-full"></div>
    <div className="bg-transparent grid grid-cols-3 gap-2 mt-6 lg:grid-cols-4">
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={vscode} alt="Visual Studio Code" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={flask} alt="Flask" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={css} alt="CSS" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={html} alt="HTML" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={bootstrap} alt="Bootstrap" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={figma} alt="Figma" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={mysql} alt="MySQL" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={tailwind} alt="Tailwind CSS" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={python} alt="Python" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={javascript} alt="JavaScript" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={github} alt="GitHub" />
      </div>
      <div className="tools px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200">
        <img className="object-fill p-4" src={termius} alt="Termius" />
      </div>
    </div>
  </section>
);

export default ToolsSection;

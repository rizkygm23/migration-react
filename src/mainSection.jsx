import React from 'react';

const MainSection = () => {
  return (
    <section className="justify-between container pt-24 grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto px-10" id="utama">
      <div className="container w-full ">
        <div className="max-w-screen-sm mx-auto grid grid-cols-1 py-11">
          <h3 className="font-sans block font-semibold text-sky-500 text-xl sm:text-2xl md:text-3xl">Hi, my name is</h3>
          <h1 className="font-sans font-bold text-gray-900 text-2xl sm:text-3xl mt-1 md:text-4xl">MUHAMMAD RIZKY.</h1>
          <h2 className="font-sans font-medium text-gray-500 text-xl sm:text-2xl mt-4 md:text-3xl lg:mt-10">
            As a UI/UX Designer, I craft intuitive and engaging applications, while as a Blockchain Validator, I ensure the integrity and security of blockchain networks..😎
          </h2>
        </div>
      </div>
      <div className="container card-wrapped w-96 h-96 max-w-xs overflow-hidden mx-auto bg-transparent mt-10 grid grid-cols-1 rounded-lg shadow-lg shadow-sky-200 hover:shadow-md hover:shadow-sky-300">
        <div className="card-content p-10 rounded-lg mx-auto ">
          <h2 className="text-center text-lg font-semibold mt-10 font-sans text-sky-500">MY WORKS</h2>
          <a href="#uiux" className="">
            <button className="border border-sky-500 p-2 rounded-3xl mt-10 hover:bg-slate-700 w-full my-auto ">
              <h3 className="text-lg font-sans font-normal text-sky-500">UI/UX Designer</h3>
            </button>
          </a>
          <a href="#uiux" className="">
            <button className="border border-sky-500 p-2 rounded-3xl mt-5 hover:bg-slate-700 w-full my-auto">
              <h3 className="text-lg font-sans font-normal text-sky-500">Blockchain Validator</h3>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
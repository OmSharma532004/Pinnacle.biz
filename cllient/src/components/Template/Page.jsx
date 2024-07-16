// components/Page.js
import React from "react";
import Footer from "../Footer/Footer";

const Page = ({ data }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-4 mt-[100px]">

      <header className="bg-white w-[70%] p-8 rounded-lg flex flex-col items-start gap-5 justify-center  mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            {data.title}
            {/* <span className="block text-2xl text-gray-600">
              Reach New Heights
            </span> */}
          </h1>
            </div>
        <p className="text-lg mb-4 text-gray-700">{data.description}</p>
        <div className="header-buttons">
          <a
            rel="noreferrer"
            className="bg-[#B1C000] text-white px-4 py-2 rounded-lg"
            href="/signup"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="bg-white flex flex-col items-center justify-center p-8 rounded-lg ">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          What You Can Expect
        </h2>
        <div className=" flex mt-[50px]  items-center justify-center flex-wrap gap-6">
          {data.advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-100 flex items-center justify-center flex-col w-[400px] h-[400px] p-6 rounded-lg shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#B1C000] mb-2">
                {advantage.split(':')[0]}
              </h2>
              <p className="text-lg text-gray-700">{advantage.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

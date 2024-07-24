// components/Page.js
import React from "react";
import Footer from "../Footer/Footer";

const Page = ({ data }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  p-4 mt-[100px]">

      <header className="bg-white w-[70%] p-8 rounded-lg flex flex-col items-start gap-5 justify-center  mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-gray-800">
            {data.title}
            {/* <span className="block text-2xl text-gray-600">
              Reach New Heights
            </span> */}
          </h1>
            </div>
        <p className="md:text-lg lg:text-lg text-lg mb-4 text-gray-700">{data.description}</p>
        <div className="header-buttons">
          <a
            rel="noreferrer"
            className="bg-[#B1C000] text-white px-4 py-2 rounded-lg"
            href="https://calendly.com/contact-pinnacle/book-a-meeting"
          >
            Get Started
          </a>
          
        </div>
      </header>

      <section className="bg-white flex flex-col items-center justify-center p-8 rounded-lg ">
        <h2 className="md:text-5xl lg:text-5xl text-3xl font-semibold text-center text-gray-800 mb-4">
          What You Can Expect
        </h2>
        <div className=" flex mt-[50px]  items-center justify-center flex-wrap gap-6">
          {data.advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-100 flex items-center justify-center flex-col md:w-[400px] md:h-[400px] h-[430px]  p-6 rounded-lg shadow-sm"
            >
              <h2 className="md:text-xl lg:text-xl text-lg  font-semibold text-[#B1C000] mb-2">
                {advantage.split(':')[0]}
              </h2>
              <p className="md:text-lg lg:text-lg text-lg text-justify text-gray-700">{advantage.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;

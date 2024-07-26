import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import About2 from './Components/About2/About';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import useCase from './Components/assets/image.png'

const Hr360 = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app bg-white text-gray-800 font-sans">
      <Navbar />
      <div className="mt-12"></div>
      <Header />
    
      
      <main className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center space-y-12">
          <section className="bg-white p-6 rounded border-t-4 border-blue-800">
            <div>
              <h2 className="md:text-5xl text-3xl font-bold mb-4 text-blue-800 ">HR360’s Success Story of Holistic Solutions</h2>
              <h3 className="text-lg mb-6 text-black r">for a reputed fintech startup serving the Middle East & North Africa region</h3>
            </div>
            <p className="mb-6 text-lg  text-black ">Client: Leading Fintech Startup serving the MENA region</p>
            <h3 className="text-3xl md:text-5xl  font-bold mt-12 mb-4 text-blue-800 r">Problem Statement:</h3>
            <ul className="list-disc text-lg list-inside mb-6 text-gray-800 r">
              <li>Time for liquidity crunch across VC/PE investments</li>
              <li>The dilemma was to continue product innovation while keeping a check on the cost</li>
            </ul>
          </section>

         

          <img src={useCase
            } alt="use-case" className=" hidden md:flex rounded-xl w-full border-t-4 border-l-2 border-b-4 border-black" />
          <section className="bg-white p-6 w-5/6 rounded border-t-4 border-blue-800">
            <h3 className="text-3xl md:text-5xl t font-bold mb-4 text-blue-800 ">Voice of Stakeholders</h3>
            <blockquote className="mb-4 text-lg text-gray-800 ">
              "Game-changer for our startup! The exceptional services catapulted our growth and made a real impact." ~ Our client
            </blockquote>
            <blockquote className=" text-lg text-gray-800 ">
              "The team is highly responsive and always there to assist us with any issues. Regular connects & engagements from their side have helped me drive 100% retention for my team in India." ~ Engineering Leader for India
            </blockquote>
          </section>
        </div>
      </main>
      <section className=" flex flex-col mb-[40px] items-center justify-center">
      <h2 className="md:text-5xl text-3xl md:-ml-[800px] text-blue-800 font-bold">Why Us</h2>
            <About2 />
          </section>
    
      
      <Footer />
      <div className="fixed bottom-5 right-5 z-10 md:bottom-36 md:right-10">
        <a 
          className="text-lg font-semibold hover:bg-yellow-600 bg-yellow-400 rounded-xl p-5 text-blue-800" 
          href="https://calendly.com/contact-pinnacle/book-a-meeting"
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
};

export default Hr360;

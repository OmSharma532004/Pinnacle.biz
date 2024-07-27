import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import useCase from './Components/assets/image.png';
import Header from './Components/Header/Header';
import About2 from './Components/About2/About';

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
      <Header />

      <main className=" mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-12">
          <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-800 w-full md:w-3/4">
            <div>
              <h2 className="md:text-5xl text-3xl font-bold mb-6 text-blue-800 text-center">HR360’s Success Story of Holistic Solutions</h2>
              <h3 className="text-lg mb-6 text-black">The following case study pertains to a reputed fintech startup that operates within the Middle East and North Africa (MENA) region.</h3>
              <p className="mb-6 text-lg text-black">Client: Leading Fintech Startup serving the MENA region</p>
              <h3 className="text-3xl md:text-5xl font-bold mt-12 mb-6 text-blue-800">Problem Statement:</h3>
              <ul className="list-disc text-lg list-inside mb-6 text-gray-800">
                <li>Time for liquidity crunch across VC/PE investments</li>
                <li>The dilemma was to continue product innovation while keeping a check on the cost</li>
              </ul>
              <img src={useCase} alt="use-case" className="rounded-xl hidden md:flex mt-6 w-full border-t-4 border-l-2 border-b-4 border-black mb-6" />
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-800 w-full md:w-3/4">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-blue-800 text-center">Voice of Stakeholders</h3>
            <blockquote className="mb-6 text-lg text-gray-800">
              "Game-changer for our startup! The exceptional services catapulted our growth and made a real impact." ~ Our client
            </blockquote>
            <blockquote className="text-lg text-gray-800">
              "The team is highly responsive and always there to assist us with any issues. Regular connects & engagements from their side have helped me drive 100% retention for my team in India." ~ Engineering Leader for India
            </blockquote>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-800 w-full md:w-3/4">
            <h2 className="md:text-5xl text-3xl text-blue-800 font-bold mb-6 text-center">Why Choose Us</h2>
            <About2 />
          </section>
        </div>
      </main>

      <Footer />

      <div className="fixed right-5 z-10 bottom-44 md:right-10">
        <a 
          className="text-lg font-semibold hover:bg-yellow-600 bg-yellow-400 rounded-xl p-4 text-blue-800" 
          href="https://calendly.com/contact-pinnacle/book-a-meeting"
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
};

export default Hr360;

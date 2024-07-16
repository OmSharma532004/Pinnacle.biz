import React, { useEffect, useState } from 'react';
import './NewHome.scss';
import { Header, About } from '../../container/index';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import About2 from './Components/About/About';
import SuccessStories from './Components/Success/SuccessStories';
import Popup from './Components/Popup/Popup';

const Elevate = () => {
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
    <div className="app">
      <Navbar />
      <div className="mt-[50px]"></div>
      <Header />
      <About />
      <About2 />
      <SuccessStories />
      <Footer />
      {showPopup && <Popup closePopup={closePopup} />}
      <div className="fixed bottom-[20px] right-[10px] z-[100] md:bottom-[150px] md:right-[10px]">
        <a 
          className='text-lg font-semibold hover:bg-green-800 font-sans bg-[#B1C000] rounded-xl p-5 text-white' 
          href="https://calendly.com/contact-pinnacle/book-a-meeting"
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
};

export default Elevate;

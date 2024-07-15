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
    </div>
  );
};

export default Elevate;

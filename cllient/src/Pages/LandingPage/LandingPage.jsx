import React from 'react';

import { Header, About, Work } from './Components/index';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "../../App.scss";
import MetaTags from '../../components/MetaTag';

const LandingPage = () => {
  return (
    <div className="app mt-[67px] lg:mt-[60.8px]">
     <MetaTags/>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
      <div className="fixed bottom-[20px] right-[10px] z-[100] md:bottom-[150px] md:right-[10px]">
        <a 
          className='text-lg font-semibold hover:bg-green-800 font-sans bg-[#B1C000] rounded-xl p-5 text-white'
          href="https://calendly.com/contact-pinnacle/book-a-meeting"
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  )
}

export default LandingPage;

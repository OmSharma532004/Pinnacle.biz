import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, About, Work } from './Components/index';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "../../App.scss";

const LandingPage = () => {
  return (
    <div className="app mt-[67px] lg:mt-[60.8px]">
      <Helmet>
        <title>Welcome to Pinnacle Solutions</title>
        <meta name="description" content="Pinnacle Solutions offers tailored and high-quality custom services for 'everything people'. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals." />
        <meta property="og:title" content="Welcome to Pinnacle Solutions" />
        <meta property="og:description" content="Pinnacle Solutions offers tailored and high-quality custom services for 'everything people'. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals." />
        <meta property="og:image" content="https://pinnacle.biz/logo.jpg" />
        <meta property="og:url" content="https://pinnacle.biz" />
      </Helmet>
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

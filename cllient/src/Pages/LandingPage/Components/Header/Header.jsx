import "./Header.scss";
import { AppWrap } from '../../../../Wrapper';
import { motion } from "framer-motion";
import { images } from "../../../../constants";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import Rocket from "../../../../assets/rocket.png";
import handshake from "../../../../assets/handshake.png";
import trophy from "../../../../assets/trophy.webp";
import Ticker from "../../../Home/Components/Ticker/Ticker";

const scalevarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const offers = [
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  "Get your free consultation today",
  "Contact our team for preferred pricing",
  "Early bird offers for July 2024 - get in touch with our team!",
  
];

const Header = () => {
  return (
    <div className=" flex flex-col mt-[80px] items-center justify-center">
      <div className='app__header app__flex' id="home">
        <motion.div 
            whileInView={{x: [-100,0], opacity: [0,1]}}
            className='app__header-info'
            transition={{duration: 0.5, delayChildren: 0.5}}
        >       
            <header className="header">
              <h1 className="headline head-text">
                Pinnacle Solutions
                <span>
                  <Typewriter
                    options={{
                      strings: ['Everything People'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p className="text-lg">
                A dedicated team of professionals who grasp business needs, objectives and the evolving market demands.
              </p>
              <p className='text-lg mt-4 mb-4'>
                Pinnacle is a leading service provider for "everything people", offering tailored and high-quality custom services. Our skilled consulting team delivers comprehensive 360-degree solutions aligned with clients' visions and business goals. With over 100+ satisfied clients and thousands of professionals placed worldwide, we excel in consulting, advisory services, market research, career advisory services, RPO services, contract staffing, and team building.
              </p>
              <p className=" text-lg mb-4 ">Trust Pinnacle to help you achieve your business objectives.</p>
              <div className='header-buttons'>
                <Link to='/signup'
                  rel="noreferrer"              
                  className="cta-button">
                  Get Started
                </Link>
              </div>
            </header>
            <motion.img
              whileInView={{scale: [0,1]}}
              transition={{duration: 1, ease: "easeInOut"}}
              src={images.circle}
              alt="profile_circle"
              className="overlay_circle"
            />
        </motion.div>
        <motion.div
          variant={scalevarients}
          whileInView={scalevarients.whileInView}
          className="app__header-circles"
        >
          {[Rocket, handshake, trophy].map((circle, index) => (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="profile_bg" />
              </div>
          ))}
        </motion.div>
      </div>
      <div className="ticker-container">
        <Ticker offers={offers} />
      </div>
    </div>
  )
}

export default Header;

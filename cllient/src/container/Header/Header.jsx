import "./Header.scss"
import {AppWrap} from '../../Wrapper'
import  {motion} from "framer-motion"
import {images} from "../../constants"
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import Rocket from "../../assets/rocket.png"
import handshake from "../../assets/handshake.png"
import trophy from "../../assets/trophy.webp"
import anchor from "../../assets/anchor.png"

const scalevarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const Header = () => {
  return (
    <div className='app__header app__flex mt-[10px] md:mt-[0px]' id="home">
      <motion.div 
          whileInView={{x: [-100,0], opacity: [0,1]}}
          className='app__header-info'
          transition={{duration: 0.5, delayChildren: 0.5}}
      >       

          <header className="header">
                        
           <div className=" flex  md:mt-8 lg:mt-8 items-center  md:gap-[40px]">
           <h1 className="headline head-text">
           ELEVATE
              <span>
              <h4> Reach New Heights</h4>
              </span>
            
            </h1>
            <img src={anchor} alt="profile" className="profile" width={100} />
           </div>

            <p className="subheadline">

              Set Yourself Apart and Achieve Your Career Goals with Our Support
            </p>
            <p className='header-content'>
Pinnacle is a well-established talent acquisition, talent management, and executive search firm
with over 14 years of experience. We have successfully partnered with hundreds of companies
and assisted thousands of candidates across three continents, working with organizations of all
sizes—from bootstrapped startups to growth-phase firms and unicorns.
Our expertise lies in connecting top-tier talent with leading organizations, offering
comprehensive 360-degree talent solutions. We are at the cutting edge of emerging industry
trends, and our team comprises some of the best minds in the business, bringing a wealth of
global experience to our clients.</p>


            <div className='header-buttons'>
              <Link to='/signup'
                rel="noreferrer"              
                className="cta-button">
                Get Started</Link>
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
        {[Rocket,handshake, trophy].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="profile_bg" />
            </div>
        ))}

      </motion.div>
    </div>
  )
}

// export default Header;

export default AppWrap(Header, 'home')
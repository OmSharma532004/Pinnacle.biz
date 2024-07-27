import "./Header.scss";
import { AppWrap } from "../../../../Wrapper";
import { motion } from "framer-motion";
import { images } from "../../../../constants";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import anchor from "../../../../assets/anchor.png";

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
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        className='app__header-info'
        transition={{duration: 0.5, delayChildren: 0.5}}
      >       
        <header className="header">
          <div className="flex md:mt-8 lg:mt-8 items-center md:gap-[40px]">
            <h1 className="headline text-blue-800 head-text">
              HR360
            </h1>
          </div>
          <h2 className=" head-text headline   text-blue-800 mb-8">Managing your superstars</h2>
          <p className="text-lg mb-6 text-black">
            For all things related to payroll, hiring, taxation, compliance, insurance, and more!
          </p>
          <p className="text-lg mb-6 text-black">
            HR 360 is a game-changing solution designed to transform your hiring process, optimize your workforce, and significantly reduce manpower costs. Our Employer of Record (EOR) services are crafted to streamline your HR operations, allowing you to focus on what truly matters—growing your business.
          </p>
          <p className="text-lg mb-6 text-black">
            We pride ourselves on our successful partnerships with clients, delivering unparalleled HR solutions that meet your unique needs. With our HR360, you gain access to a comprehensive suite of services that simplify employment complexities, enhance compliance, and drive efficiency.
          </p>
          <p className="text-lg mb-6 text-black">
            Experience the difference with HR360 and discover how our innovative EOR services can elevate your business to new heights.
          </p>
          <Link to="https://calendly.com/contact-pinnacle/book-a-meeting" rel="noreferrer" className="bg-yellow-400 mt-4 p-4 rounded-lg text-blue-800 text-lg">
            Get Started
          </Link>
        </header>
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: "easeInOut"}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
    </div>
  )
}

export default Header;

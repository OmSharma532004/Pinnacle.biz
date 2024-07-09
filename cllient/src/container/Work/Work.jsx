import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { FaUserTie, FaNetworkWired, FaFileAlt, FaSearch, FaSmile } from 'react-icons/fa';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Personalized Hand-Holding Solutions',
    description:
      "At Pinnacle, we understand that each professional's journey is unique. Our Elevate Program offers customized support tailored to your individual needs and goals. From the initial consultation to landing your next role, our dedicated mentors will guide you every step of the way.",
    icon: <FaUserTie className="text-4xl text-[#B1C000]" />,
    tags: ['Personalized Hand-Holding Solutions'],
  },
  {
    title: 'Leveraging Our Extensive Network',
    description:
      'With a wealth of industry experience, Pinnacle has built a vast network of industry leaders, hiring managers, and top-tier organizations. By enrolling in the Elevate Program, you gain exclusive access to these critical connections, providing you with opportunities that align with your skills and ambitions.',
    icon: <FaNetworkWired className="text-4xl text-[#B1C000]" />,
    tags: ['Leveraging Our Extensive Network'],
  },
  {
    title: 'Professional CV and Social Profile Enhancement',
    description:
      "In today's competitive job market making a strong first impression is crucial. Our team of experts will help you craft a compelling CV and optimize your LinkedIn and social media profiles to ensure they highlight your strengths, achievements, and potential.",
    icon: <FaFileAlt className="text-4xl text-[#B1C000]" />,
    tags: ['Professional CV and Social Profile Enhancement'],
  },
  {
    title: 'Innovative Job Search Strategies',
    description:
      'We believe in thinking out of the box. Our team will introduce you to creative job search techniques and strategies, helping you uncover hidden job opportunities and secure positions that truly match your career goals.',
    icon: <FaSearch className="text-4xl text-[#B1C000]" />,
    tags: ['Innovative Job Search Strategies'],
  },
  {
    title: 'Psychological and Social Support',
    description:
      "We understand that switching jobs, can be a stressful and challenging time. Our program includes conditioning and coaching to help you navigate these challenges. We provide the tools and support to maintain your confidence and motivation during your job search.",
    icon: <FaSmile className="text-4xl text-[#B1C000]" />,
    tags: ['Psychological and Social Support'],
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    setPosition(-diff);
  };

  const handleTouchEnd = () => {
    setPosition(0);
    currentIndex === filterWork.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const handleClick = () => {
    currentIndex === 0
      ? setCurrentIndex(works.length - 1)
      : setCurrentIndex(currentIndex - 1);
    let item = works[currentIndex - 1].tags[0];
    setActiveFilter(item);
  };

  const handleClickAfter = () => {
    currentIndex === works.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    let item = works[currentIndex + 1].tags[0];
    setActiveFilter(item);
  };

  const HandletworlFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);

    if (item === 'All') {
      setFilterWork(works);
    } else {
      const filteredWorks = works.filter((work) => work.tags.includes(item));
      setFilterWork(filteredWorks);
      setCurrentIndex(0); // Reset to the first item of the filtered results
    }
  };

  const work = filterWork[currentIndex];

  return (
    <>
      <h2 className='text-5xl font-bold text-center mb-8'>
        Boost Your <span className="text-[#B1C000] ">Career</span> With Our <span className="text-[#B1C000]">Services</span>
      </h2>

      <div className='flex justify-center mb-8'>
        {[
          'Personalized Hand-Holding Solutions',
          'Leveraging Our Extensive Network',
          'Professional CV and Social Profile Enhancement',
          'Innovative Job Search Strategies',
          'Psychological and Social Support'
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => HandletworlFilter(item)}
            className={`cursor-pointer px-4 py-2 m-2 text-sm rounded-lg ${
              activeFilter === item ? 'bg-[#B1C000] text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex items-center cursor-pointer' onClick={handleClick}>
          <ArrowBackIosIcon />
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='flex overflow-hidden w-[80%]'
          style={{ transform: `translateX(${position}px)` }}
        >
          {filterWork.length && (
            <div className='flex flex-col items-center'>
              <div className='flex justify-center mb-4'>
                {work.icon}
              </div>

              <div className='text-center'>
                <h4 className='text-xl font-semibold'>{work.title}</h4>
                <p className='mt-2 text-gray-600'>
                  {work.description}
                </p>

                <Link to='/signup' className='inline-block mt-4 px-4 py-2 bg-[#B1C000] text-white rounded-lg'>
                  Learn More
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        <div className='flex items-center cursor-pointer' onClick={handleClickAfter}>
          <ArrowForwardIosIcon />
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        {filterWork.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[#B1C000]' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'bg-white'
);

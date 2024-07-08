import React, { useEffect, useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import './Work.scss';
import { AppWrap, MotionWrap } from '../../Wrapper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import resumeReview from '../../assets/resumeReview.png';
import resumeMakeover from '../../assets/resumeMakeover.png';
import jobCouncelling from '../../assets/jobCouncelling.png';
import jobSearch from '../../assets/jobSearch.png';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Personalized Hand-Holding Solutions',
    description:
      "At Pinnacle, we understand that each professional's journey is unique. Our Elevate Program offers customized support tailored to your individual needs and goals. From the initial consultation to landing your next role, our dedicated mentors will guide you every step of the way.",
    imgUrl: resumeReview,
    tags: ['Personalized Hand-Holding Solutions'],
  },
  {
    title: 'Leveraging Our Extensive Network',
    description:
      'With a wealth of industry experience, Pinnacle has built a vast network of industry leaders, hiring managers, and top-tier organizations. By enrolling in the Elevate Program, you gain exclusive access to these critical connections, providing you with opportunities that align with your skills and ambitions.',
    imgUrl: resumeMakeover,
    tags: ['Leveraging Our Extensive Network'],
  },
  {
    title: 'Professional CV and Social Profile Enhancement',
    description:
      "In today's competitive job market making a strong first impression is crucial. Our team of experts will help you craft a compelling CV and optimize your LinkedIn and social media profiles to ensure they highlight your strengths, achievements, and potential.",
    imgUrl: jobCouncelling,
    tags: ['Professional CV and Social Profile Enhancement'],
  },
  {
    title: 'Innovative Job Search Strategies',
    description:
      'We believe in thinking out of the box. Our team will introduce you to creative job search techniques and strategies, helping you uncover hidden job opportunities and secure positions that truly match your career goals.',
    imgUrl: jobSearch,
    tags: ['Innovative Job Search Strategies'],
  },
  {
    title: 'Psychological and Social Support',
    description:
      "We understand that switching jobs, can be a stressful and challenging time. Our program includes conditioning and coaching to help you navigate these challenges. We provide the tools and support to maintain your confidence and motivation during your job search.",
    imgUrl: jobSearch,
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
      <h2 className='head-text' style={{ marginTop: '0.75rem' }}>
        Boost Your<span> Career </span>With Our <span>Services</span>
      </h2>

      <div className='app__work-filter'>
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
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className='app__work-portfolioArea'>
        <div className='app__work-portfolioArea-left'>
          <div className='icon' onClick={handleClick}>
            <ArrowBackIosIcon />
          </div>
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
          style={{ transform: `translateX(${position}px)` }}
        >
          {filterWork.length && (
            <div className='app__work-item app__flex'>
              <div className='app__work-image app__flex'>
                {work.imgUrl && <img src={work.imgUrl} alt={work.title} />}
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <Link to='/signup' className='cta__button'>
                  Learn More
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        <div className='app__work-portfolioArea-right'>
          <div className='icon' onClick={handleClickAfter}>
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className='app__work-mobileNav'>
          <div className='app__work-mobileNav-left'>
            <div className='icon' onClick={handleClick}>
              <ArrowBackIosIcon />
            </div>
          </div>

          <div className='icon' onClick={handleClickAfter}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      <div className='app__work-indicator app__flex'>
        {filterWork.map((work, index) => (
          <div
            className='app__work-indiviual-indicator'
            key={index}
            style={currentIndex === index ? { backgroundColor: '#B1C000' } : {}}
          ></div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);

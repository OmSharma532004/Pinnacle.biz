import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Work.scss";
import { AppWrap, MotionWrap } from '../../../../Wrapper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import resumeReview from '../../../../assets/resumeReview.png';
import resumeMakeover from '../../../../assets/resumeMakeover.png';
import jobCouncelling from '../../../../assets/jobCouncelling.png';
import jobSearch from '../../../../assets/jobSearch.png';
import { Link } from 'react-router-dom';
import i1 from '../../../Home/expect_img/6.png';
import i2 from '../../../Home/expect_img/7.png';
import i3 from '../../../Home/expect_img/8.png';
import i4 from '../../../Home/expect_img/9.png';
import i5 from '../../../Home/expect_img/10.png';

const data = [
  {
    title: 'Recruiting and More',
    description: "At Pinnacle, we excel in Executive Search and Contingency Hiring, offering tailored solutions to meet your leadership needs. Our expert team rigorously identifies top talent, ensuring the perfect fit for your organization. From strategic leadership to project-specific hires, we deliver efficient recruitment solutions to propel your business forward.",
    imgUrl: i1,
    tags: ['Recruiting and More'],
    category: 'Employer',
  },
  {
    title: 'ELEVATE',
    description: 'At Pinnacle, we offer personalized job search assistance tailored to your career goals. Our expert team provides resume optimization, interview coaching, and strategic support, helping you navigate the job market confidently and discover the best opportunities for your professional journey.',
    imgUrl: i2,
    tags: ['ELEVATE'],
    category: 'Candidate',
  },
  {
    title: 'Business Solutions',
    description: "At Pinnacle Solutions, we help startups turn dreams into reality by finding like-minded professionals. Employees are your greatest assets, driving success. Over the past decade, we've partnered with passionate entrepreneurs and helped 50+ companies build dream teams, earning a reputation for excellence.",
    imgUrl: i3,
    tags: ['Business Solutions'],
    category: 'Employer',
  },
  {
    title: 'Advisory Services',
    description: "At Pinnacle Solutions, we recognize that dynamic environments make forward-thinking essential. Succession planning is crucial for future preparedness. Our advisory services include organizational vision assessment, skills analysis, talent mapping, and retention programs. We offer these and more to ensure you stay ahead and achieve long-term success.",
    imgUrl: i5,
    tags: ['Advisory Services'],
    category: 'Candidate',
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setWorks(data);
    setFilterWork(data);
  }, []);

  useEffect(() => {
    if (category === '') {
      setFilterWork(data);
    } else {
      setFilterWork(data.filter(work => work.category === category));
    }
    setCurrentIndex(0);
    setActiveFilter('All');
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleFilterClick = (item) => {
    setActiveFilter(item);
    const index = filterWork.findIndex(work => work.tags[0] === item);
    setCurrentIndex(index);
  };

  const handleClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(filterWork.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClickAfter = () => {
    if (currentIndex === filterWork.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const work = filterWork[currentIndex];

  return (
    <>
      <div className="app__work-filter">
        <div className={`app__work-filter-item ${category === '' ? 'item-active' : ''}`} onClick={() => handleCategoryChange('')}>
          All
        </div>
        <div className={`app__work-filter-item ${category === 'Employer' ? 'item-active' : ''}`} onClick={() => handleCategoryChange('Employer')}>
          Employer
        </div>
        <div className={`app__work-filter-item ${category === 'Candidate' ? 'item-active' : ''}`} onClick={() => handleCategoryChange('Candidate')}>
          Candidate
        </div>
      </div>

      <div className="app__work-filter">
        {category === '' && (
          ['Recruiting and More', 'ELEVATE', 'Business Solutions', 'Advisory Services'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))
        )}
        {category === 'Employer' && (
          ['Recruiting and More', 'Business Solutions'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))
        )}
        {category === 'Candidate' && (
          [ 'Advisory Services','ELEVATE'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))
        )}
      </div>

      <div className="app__work-portfolioArea">
        <div className="app__work-portfolioArea-left">
          <div className="icon" onClick={handleClick}>
            <ArrowBackIosIcon />
          </div>
        </div>

        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.length && (
            <div className="app__work-item app__flex">
              <div className="app__work-image app__flex">
                {work.imgUrl && (
                  <img src={work.imgUrl} alt={work.title} />
                )}
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                {work.tags[0] === "Premium Job Search Assistance" ?
                  <Link to='/home' className='cta__button'>
                    Know More
                  </Link>
                  :
                  <a href='#contact' className='cta__button'>
                    Know More
                  </a>
                }
              </div>
            </div>
          )}
        </motion.div>

        <div className="app__work-portfolioArea-right">
          <div className="icon" onClick={handleClickAfter}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      <div className="app__work-indicator app__flex">
        {filterWork.map((work, index) => (
          <div className='app__work-indiviual-indicator'
            key={index}
            style={currentIndex === index ? { backgroundColor: '#B1C000' } : {}}
          >
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
);

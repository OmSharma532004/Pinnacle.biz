import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./Work.scss";
import { AppWrap, MotionWrap } from '../../../../Wrapper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import i1 from '../../../Home/expect_img/6.png';
import i2 from '../../../Home/expect_img/7.png';
import i5 from '../../../Home/expect_img/10.png';
import i3 from '../../../Home/expect_img/8.png';
import i4 from '../../../Home/expect_img/9.png';
import i6 from '../../../Home/expect_img/2.png';
import i7 from '../../../Home/expect_img/3.png';

const data = [
  {
    title: 'Recruiting and More',
    description: "At Pinnacle, we excel in Executive Search and Contingency Hiring, offering tailored solutions to meet your leadership needs. Our expert team rigorously identifies top talent, ensuring the perfect fit for your organization. From strategic leadership to project-specific hires, we deliver efficient recruitment solutions to propel your business forward.",
    imgUrl: i1,
    tags: ['Recruiting and More'],
    category: 'Candidate',  
  },
  {
    title: 'ELEVATE',
    description: 'At Pinnacle, we offer personalized job search assistance tailored to your career goals. Our expert team provides resume optimization, interview coaching, and strategic support, helping you navigate the job market confidently and discover the best opportunities for your professional journey.',
    imgUrl: i2,
    tags: ['ELEVATE'],
    category: 'Candidate',
  },
  {
    title: 'Executive Search',
    description: "Pinnacle specializes in finding exceptional executive talent to drive your business forward. With deep industry expertise and a personalized approach, we ensure that we connect you with leaders who align with your company's unique culture, values and strategic objectives. Our services include comprehensive leadership assessment, succession planning and market intelligence, enabling us to identify top-tier executives suited to your goals. Partner with Pinnacle to elevate your organization with the right leadership.",
    imgUrl: i5,
    tags: ['Executive Search'],
    category: 'Employee',
  },  {
    title: 'Contingency Hiring',
    description: "Pinnacle excels in contingency hiring, swiftly connecting you with top talent to meet your immediate staffing needs. Our deep industry expertise and extensive network enable us to provide high-quality candidates who align with your company’s culture and requirements. With a focus on speed and efficiency, we leverage market intelligence and a comprehensive assessment process to ensure the best fit. Partner with Pinnacle for reliable contingency hiring solutions that keep your business moving forward.",
    imgUrl: i7,
    tags: ['Contingency Hiring'],
    category: 'Employee',
  },
  {
    title: 'Contractual Hiring',
    description: "Pinnacle specializes in contractual hiring, offering flexible staffing solutions for your project-based and temporary workforce needs. With our deep industry knowledge and extensive network, we quickly connect you with skilled professionals who fit your company’s culture and requirements. Our thorough assessment process and market insights ensure we provide the best talent for your short-term objectives.Partner with Pinnacle for reliable contractual hiring solutions that keep your business agile and productive.",
    imgUrl: i6,
    tags: ['Contractual Hiring'],
    category: 'Employee',
  },
  {
    title: 'Retained Search',
    description: "Pinnacle specializes in retained search services, dedicated to finding top-tier executive talent for your organization’s critical leadership roles. With our deep industry expertise and personalized approach, we conduct thorough searches to identify candidates who perfectly align with your company’s culture, values, and strategic vision. Our commitment to excellence and comprehensive assessment process ensure we deliver the highest caliber leaders to drive your business forward. Trust Pinnacle for reliable and effective retained search solutions that elevate your leadership team.",
    imgUrl: i4,
    tags: ['Retained Search'],
    category: 'Employee',
  },
  {
    title: 'HR360',
    description: "Pinnacle offers comprehensive HR 360 - Employer of Record (EOR) services designed to streamline your workforce management. As your trusted partner, we handle all aspects of employment compliance, payroll administration, benefits management, and HR administration, allowing you to focus on your core business activities. With our extensive expertise and commitment to compliance, we ensure smooth operations and seamless integration of personnel, whether you're expanding into new markets or enhancing operational efficiency. Partner with Pinnacle for reliable HR 360 EOR services that support your business growth and mitigate employment risks effectively.",
    imgUrl: i3,
    tags: ['HR360'],
    category: 'Employee',
  },
  {
    title: 'Research and Advisory Services',
    description: "At Pinnacle Solutions, we understand that changing environments and constant dynamism make forward-thinking essential. While you may be equipped for today, succession planning is crucial for future preparedness. Our advisory services encompass a comprehensive assessment of your organizational vision, skills analysis, talent mapping, and the development of retention programs. We provide all these services and more to help you stay ahead and ensure long-term success.",
    imgUrl: i5,
    tags: ['Research and Advisory Services'],
    category: 'Employee',
  }
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [category, setCategory] = useState('Candidate');
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    setWorks(data);
    setFilterWork(data.filter(work => work.category === category));
    setActiveFilter(data.filter(work => work.category === category)[0].tags[0]);
  }, [category]);

  useEffect(() => {
    if (activeFilter) {
      const index = filterWork.findIndex(work => work.tags.includes(activeFilter));
      setCurrentIndex(index !== -1 ? index : 0);
    } else {
      setCurrentIndex(0);
    }
  }, [activeFilter, filterWork]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const newFilterWork = data.filter(work => work.category === newCategory);
    setFilterWork(newFilterWork);
    setActiveFilter(newFilterWork[0].tags[0]);
    setCurrentIndex(0);
  };

  const handleFilterClick = (item) => {
    setActiveFilter(item);
  };

  const handleClick = () => {
    const newIndex = currentIndex === 0 ? filterWork.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setActiveFilter(filterWork[newIndex].tags[0]);
  };

  const handleClickAfter = () => {
    const newIndex = currentIndex === filterWork.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setActiveFilter(filterWork[newIndex].tags[0]);
  };

  const toggleExpand = (index) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  const work = filterWork[currentIndex];

  const getShortDescription = (description) => {
    const words = description.split(' ');
    return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : description;
  };

  return (
    <>
      <div className="app__work-filter -mt-[20px]">
        <div className={`app__work-filter-item text-2xl ${category === 'Candidate' ? 'item-active' : ''}`} onClick={() => handleCategoryChange('Candidate')}>
          Candidate's Corner
        </div>
        <div className={`app__work-filter-item text-2xl ${category === 'Employee' ? 'item-active' : ''}`} onClick={() => handleCategoryChange('Employee')}>
          Employer's Corner
        </div>
      </div>

      <div className="app__work-filter">
        {category === 'Candidate' && (
          ['Recruiting and More', 'ELEVATE'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(item)}
              className={`app__work-filter-item app__flex p-text text-lg ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))
        )}
        {category === 'Employee' && (
          ['Executive Search', 'Contingency Hiring', 'Contractual Hiring', 'Retained Search', 'HR360', 'Research and Advisory Services'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(item)}
              className={`app__work-filter-item app__flex p-text md:w-[350px] text-center text-lg ${activeFilter === item ? 'item-active' : ''}`}
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
          {filterWork.length > 0 && (
            <div className={`app__work-item app__flex ${expanded[currentIndex] ? 'expanded' : ''}`}>
              <div className="app__work-image app__flex">
                {work.imgUrl && (
                  <img src={work.imgUrl} alt={work.title} title={work.title}  />
                )}
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {expanded[currentIndex] ? work.description : getShortDescription(work.description)}
                </p>
                <button className="cta__button" onClick={() => toggleExpand(currentIndex)}>
                  {expanded[currentIndex] ? 'Show Less' : 'Know More'}
                </button>
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

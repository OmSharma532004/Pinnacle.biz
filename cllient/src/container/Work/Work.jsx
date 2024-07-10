
import React from 'react';
import { FaTools, FaBoxOpen, FaShieldAlt, FaCouch, FaDraftingCompass, FaClipboardCheck } from 'react-icons/fa';
 import { FaUserTie, FaNetworkWired, FaFileAlt, FaSearch, FaSmile } from 'react-icons/fa';
 import {AppWrap,MotionWrap} from '../../Wrapper'
const Resources = () => {
  const resources = [
    {
      title: 'Personalized Hand-Holding Solutions',
      description:
        "At Pinnacle, we understand that each professional's journey is unique. Our Elevate Program offers customized support tailored to your individual needs and goals. From the initial consultation to landing your next role, our dedicated mentors will guide you every step of the way.",
      icon: <FaUserTie className="text-4xl text-white" />,
      tags: ['Personalized Hand-Holding Solutions'],
    },
    {
      title: 'Leveraging Our Extensive Network',
      description:
        'With a wealth of industry experience, Pinnacle has built a vast network of industry leaders, hiring managers, and top-tier organizations. By enrolling in the Elevate Program, you gain exclusive access to these critical connections, providing you with opportunities that align with your skills and ambitions.',
      icon: <FaNetworkWired className="text-4xl text-white" />,
      tags: ['Leveraging Our Extensive Network'],
    },
    {
      title: 'Professional CV and Social Profile Enhancement',
      description:
        "In today's competitive job market making a strong first impression is crucial. Our team of experts will help you craft a compelling CV and optimize your LinkedIn and social media profiles to ensure they highlight your strengths, achievements, and potential.",
      icon: <FaFileAlt className="text-4xl text-white" />,
      tags: ['Professional CV and Social Profile Enhancement'],
    },
    {
      title: 'Innovative Job Search Strategies',
      description:
        'We believe in thinking out of the box. Our team will introduce you to creative job search techniques and strategies, helping you uncover hidden job opportunities and secure positions that truly match your career goals.',
      icon: <FaSearch className="text-4xl text-white" />,
      tags: ['Innovative Job Search Strategies'],
    },
    {
      title: 'Psychological and Social Support',
      description:
        "We understand that switching jobs, can be a stressful and challenging time. Our program includes conditioning and coaching to help you navigate these challenges. We provide the tools and support to maintain your confidence and motivation during your job search.",
      icon: <FaSmile className="text-4xl text-white" />,
      tags: ['Psychological and Social Support'],
    },
  ];

  return (
    <div className='flex flex-col bg-white  items-center justify-around w-full'>
      <h2 className="text-5xl font-bold   mb-11  text-[#B1C000] text-center">Resources</h2>
      <div className="md:w-[70%] p-4 rounded-xl bg-[#B1C000] gap-4">
        {resources.map((resource, index) => (
          <div key={index} className="flex  items-start p-4  ">
            <div className="text-4xl mr-4  p-4">
              {resource.icon}
            </div>
            <div>
              <h3 className="text-lg text-white font-semibold mb-4 sm:text-xl">{resource.title}</h3>
              <p className="text-sm text-white sm:text-base">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Resources, 'app__about'),
  'about',
  "app__whitebg"
);

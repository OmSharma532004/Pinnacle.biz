import React from 'react';
import { motion } from 'framer-motion';
import "./About.scss";
import i1 from "../../expect_img/1.png";
import i2 from "../../expect_img/2.png";
import i3 from "../../expect_img/3.png";
import i4 from "../../expect_img/4.png";
import i5 from "../../expect_img/5.png";
import { AppWrap, MotionWrap } from '../../../../Wrapper';


const abouts = [
  { 
    title: "Personalized Mentorship", 
    description: "One-on-one coaching sessions with seasoned mentors. Tailored advice and support to navigate your career transition.", 
    imgUrl: i1 
  },
  { 
    title: "Network Access", 
    description: "Direct introductions to key industry contacts. Invitations to exclusive networking events and webinars.", 
    imgUrl: i2
  },
  { 
    title: "Profile Optimization", 
    description: "Professional CV writing and review services. LinkedIn and social media profile enhancement.", 
    imgUrl: i3
  },
  { 
    title: "Creative Job Search Support", 
    description: "Access to niche job boards and opportunities. Guidance on leveraging online and offline job search resources.", 
    imgUrl: i4
  },
  { 
    title: "Psychological and Social Support", 
    description: "Coaching sessions to build resilience and confidence. Strategies to manage stress and maintain a positive outlook.", 
    imgUrl: i5
  }
];

const About2 = () => {
  return (
    <>
      <h2 className='head-text'> <span>What You Can Expect:</span></h2>  
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.65, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="text-xl font-semibold" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="text-lg" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About2, 'app__about'),
  'about',
  "app__whitebg"
);

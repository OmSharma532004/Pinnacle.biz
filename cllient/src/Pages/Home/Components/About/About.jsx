import React from 'react';
import { motion } from 'framer-motion';
import "./About.scss";
import { images } from '../../../../constants';
import { AppWrap, MotionWrap } from '../../../../Wrapper';
import expertGuidance from '../../../../assets/expertGuidance.png';

const abouts = [
  { 
    title: "Personalized Mentorship", 
    description: "One-on-one coaching sessions with seasoned mentors. Tailored advice and support to navigate your career transition.", 
    imgUrl: expertGuidance 
  },
  { 
    title: "Network Access", 
    description: "Direct introductions to key industry contacts. Invitations to exclusive networking events and webinars.", 
    imgUrl: images.about04 
  },
  { 
    title: "Profile Optimization", 
    description: "Professional CV writing and review services. LinkedIn and social media profile enhancement.", 
    imgUrl: images.about02 
  },
  { 
    title: "Creative Job Search Support", 
    description: "Access to niche job boards and opportunities. Guidance on leveraging online and offline job search resources.", 
    imgUrl: images.about02 
  },
  { 
    title: "Psychological and Social Support", 
    description: "Coaching sessions to build resilience and confidence. Strategies to manage stress and maintain a positive outlook.", 
    imgUrl: images.about02 
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
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
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

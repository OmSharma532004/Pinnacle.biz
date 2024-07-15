import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../../../constants';
import { AppWrap, MotionWrap } from '../../../../Wrapper';
import expertGuiadance from '../../../../assets/expertGuidance.png';

const abouts = [
  { title: 'Expertise & Insight', description: 'With over a decade of expertise, we possess a profound understanding of diverse industries, business segments and market dynamics, enabling us to provide superior <i>#talentacquisition</i> and strategic business guidance.', imgUrl: expertGuiadance },
  { title: 'Tailored Solutions', description: 'Acknowledging the distinctiveness of every business, we deliver <i>#bespoke</i> services tailored to meet specific objectives. From executive search to strategic advisory, we ensure personalised solutions that drive success.', imgUrl: images.about04 },
  { title: 'Proven Success', description: 'With a proven track record of helping numerous companies build exceptional teams and placing hundreds of candidates, we consistently deliver impactful results that drive growth for businesses and professionals', imgUrl: images.about02 }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'><span>Partner</span> With Us: Unmatched <br /><span>Expertise</span> and <span>Success</span></h2>
      <div className='flex items-start justify-center w-full'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.65, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <div className='flex flex-col items-center justify-center'>
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text text-xl' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text text-lg' style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: about.description }}></p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-around mt-[30px] flex-wrap gap-5 md:gap-0 w-[100%] p-8 ">
        <div className="text-center">
          <h3 className="text-xl p-3 rounded-lg mb-4 bg-[#B1C000] font-bold">Inception</h3>
          <p className="text-4xl font-bold">2010</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl p-3 rounded-lg mb-4 bg-[#B1C000] font-bold">Active Clients</h3>
          <p className="text-4xl font-bold">50+</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl p-3 rounded-lg mb-4 bg-[#B1C000] font-bold">Serving in Countries</h3>
          <p className="text-4xl font-bold">15+</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl p-3 rounded-lg mb-4 bg-[#B1C000] font-bold">Candidate Database</h3>
          <p className="text-4xl font-bold">120K+</p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);

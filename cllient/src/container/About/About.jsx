import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import "./About.scss"
import {images} from '../../constants'
import {AppWrap,MotionWrap} from '../../Wrapper'
import expertGuiadance from '../../assets/expertGuidance.png'
import exp from 'constants'

const abouts = [
  {title: "Expert Guidance", description: "We'll work with you to define your career goals and identify the perfect job opportunities aligned with your skills and experience.", imgUrl: expertGuiadance},
  {title: "Market Insights", description: " Leverage our expertise to discover the best fitting opportunities in today's job market, giving you a competitive edge.", imgUrl: images.about04},
  {title: "Stay Afloat", description: "We will equip you with the tools and strategies to stay relevant and competitive in your field, ensuring you are always prepared for the next steps.", imgUrl: images.about02}
 
]

const About = () => {
  return (
    <>
  
     <div className=' flex flex-col w-[80%]  items-center justify-center '>
     <h2 className='text-5xl text-center font-semibold    '>Boost <span>Visibility,</span> <span>Choose  Us  </span> And  </h2>
     <b className=' font-semibold text-5xl mt-5  text-[#B1C000]'>Elevate</b>
  
  <div className=' w-[70%] mt-[100px] text-xl text-gray-500  '>
  In the face of organizational restructuring, even the most seasoned professionals can find
themselves facing unexpected career transitions. Pinnacle's ELEVATE Program is here to turn
this challenging period into a transformative opportunity. Designed specifically for middle and
senior-level candidates, our comprehensive outplacement services provide the support you need
to secure a role that aligns with your skills and career aspirations.
  </div>
     </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);
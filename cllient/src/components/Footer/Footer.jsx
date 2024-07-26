import React, { useState } from 'react';
import "./Footer.scss";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import PhoneComponent from '../../components/PhoneComponent/Phonecomponent2.jsx';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import logo from '../../assets/logo.webp';
import { toast } from 'react-toastify';
import { AppWrap, MotionWrap } from '../../Wrapper';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone Number is required';
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      await axios.post('/user/contact', formData);
      setIsSubmitted(true);
      toast.success('Message sent successfully', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } catch (error) {
      toast.error('Error sending message', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
    setErrors({});
  };

  const redirectToSitemap = () => {
    window.location.href = 'https://res.cloudinary.com/dtxejnbnw/image/upload/v1721674633/pinnacleSitemap_q1k9cm.pdf';
  };

  const redirectToBlogs = () => {
    window.location.href = 'https://res.cloudinary.com/dtxejnbnw/image/upload/v1721674646/Blogs_q6i2ty.pdf';
  };

  const SocialMedia = () => (
    <div className="app__social flex flex-row justify-start gap-3 p-0 lg:hidden">
      <a target="_blank" rel="noreferrer" href='https://x.com/Pinnaclesol'>
        <FaTwitter />
      </a>
      <a href='https://www.linkedin.com/company/getpinnacle/mycompany/verification/' target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href='https://www.instagram.com/pinnaclebiz_everythingpeople/' target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );

  return (
    <>
      <section className="footer md:-mt-[65px]" id='contact'>
        <motion.div className="container"
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          <div className="left">
            <div className='flex flex-col items-center justify-center'>
              <img src={logo} alt="Pinnacle Logo" title='pinnacle' />
              <div className="pt-4 flex flex-col items-center justify-center text-center">
                <p className='w-[250px] md:w-[600px] lg:w-[600px]'>
                  If you have any questions or inquiries, feel free to reach out to us
                </p>
                <p>Email: contact@pinnacle.biz</p>
                <p>Phone: +91 11 7966 2027</p>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="right">
            {isSubmitted ? 
              <p className="successMessage">
                Thanks for contacting us! <br /> We will get back to you shortly.
              </p> 
              : (
                <div className="contact-form">
                  <h2 className="text-2xl font-bold mb-4">Get In Touch </h2>
                  <form className="form">
                    <div className='mb-4'>
                      <input type="text" name='name' value={formData.name} placeholder="Your Name" className="form-input w-full px-4 py-2 rounded-lg" onChange={handleChange} />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="form-input w-full px-4 py-2 rounded-lg" />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="form-input mb-4 w-full rounded-lg">
                      <PhoneComponent value={formData.phoneNumber} onChange={(phone) => setFormData({...formData, phoneNumber: phone})} />
                      {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                    <div className='mb-4'>
                      <textarea placeholder="Your Message" name='message' value={formData.message} onChange={handleChange} className="form-textarea w-full px-4 py-2 rounded-lg h-32"></textarea>
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary w-full px-4 py-2 rounded-lg bg-[#b0c036] text-white hover:bg-[#9bb133]">Submit Response</button>
                  </form>
                </div>
              )}
          </div>
        </motion.div>
      </section>
      <div className='flex flex-col w-full mb-5 justify-center gap-5'>
        <div className="flex md:flex-row flex-col items-center gap-5 md:items-start w-full justify-around text-gray-600 text-lg">
          <div className='section flex flex-col items-center justify-center'>
            <h3 className='text-xl mb-4 text-[#B1C000]'>Quick Links</h3>
            <ul>
              <li><Link onClick={()=>{
                window.scrollTo(0,0);
              }} to="/">Home</Link></li>
              <li><a href="#about" className="hover:text-gray-600">About Us</a></li>
              <Link to="/blogs"
              onClick={()=>{
                window.location.href = "/blogs";
                
              }}
              >Blogs</Link>
              <li><a href="#contact" className="hover:text-gray-600">Contact Us</a></li>
            </ul>
          </div>
          <div className='section flex flex-col items-center justify-center'>
            <h3 className='text-xl mb-4 text-[#B1C000]'>Legal</h3>
            <ul>
              <li><Link to="/disclaimer">Disclaimer Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><button onClick={redirectToSitemap}>Sitemap</button></li>
            </ul>
          </div>
          <div className='section flex flex-col items-center justify-center'>
            <h3 className='text-xl mb-4 text-[#B1C000]'>Information</h3>
            <ul className='flex items-start justify-center gap-5'>
              <div>
                <li><Link to="/jobs">Jobs in Delhi</Link></li>
                <li><Link to="/jobs">Jobs in Gurugram</Link></li>
                <li><Link to="/jobs">Jobs in Bengaluru</Link></li>
                <li><Link to="/jobs">Jobs in Mumbai</Link></li>
                <li><Link to="/jobs">Engineering Jobs</Link></li>
                <li><Link to="/jobs">Product Jobs</Link></li>
                <li><Link to="/jobs">Leadership Jobs</Link></li>
              </div>
              <div>
                <li><Link to="/jobs">Jobs in India</Link></li>
                <li><Link to="/jobs">Jobs In Dubai</Link></li>
                <li><Link to="/jobs">Jobs in Singapore</Link></li>
                <li><Link to="/jobs">Jobs in North America</Link></li>
                <li><Link to="/jobs">Jobs in London</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-gray-600 mt-6'>© 2012 - 2024 Pinnacle Solutions, Pinnacle.biz, ELEVATE, HR360 ~ All rights reserved.</p>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);

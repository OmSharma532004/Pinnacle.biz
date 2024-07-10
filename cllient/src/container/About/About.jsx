import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { AppWrap, MotionWrap } from '../../Wrapper';
import anchor from '../../assets/anchor.png';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const openForm = () => setIsOpen(true);
  const closeForm = (e) => {
    if (e.target.id === 'enrollForm') {
      setIsOpen(false);
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.interest) formErrors.interest = 'Interest selection is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch('https://api.example.com/enroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Form submitted successfully');
          setIsOpen(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            interest: '',
            message: ''
          });
        } else {
          alert('Form submission failed');
          setIsOpen(false);
        }
      } catch (error) {
        alert('Form submission failed');
        setIsOpen(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className='flex flex-col w-[80%] mx-auto items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <img src={anchor} alt='anchor' className='profile mb-8' width={100} />
          <h2 className='text-3xl md:text-5xl text-center font-semibold'>
            Boost <span>Visibility,</span> <span>Choose Us</span> And
          </h2>
          <div className='flex items-center justify-center'>
            <b className='font-semibold text-3xl md:text-5xl mt-5 text-[#B1C000]'>Elevate</b>
          </div>
        </div>
        <div className='w-[90%] md:w-[70%] mt-8 md:mt-[100px] text-lg md:text-xl text-gray-500'>
          In the face of organizational restructuring, even the most seasoned professionals can find themselves facing unexpected career transitions. Pinnacle's ELEVATE Program is here to turn this challenging period into a transformative opportunity. Designed specifically for middle and senior-level candidates, our comprehensive outplacement services provide the support you need to secure a role that aligns with your skills and career aspirations.
        </div>
      </div>
      <div className='enroll-button-container mt-8 flex justify-center'>
        <button className='enroll-button bg-[B1C000]  text-white p-3 rounded-lg' onClick={openForm}>
          Enroll Now
        </button>
      </div>

      {isOpen && (
        <div id='enrollForm' className='modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50' onClick={closeForm}>
          <div className='modal-content bg-white p-8 rounded-lg shadow-lg max-w-md w-full' onClick={(e) => e.stopPropagation()}>
            <span className='close absolute top-4 right-4 cursor-pointer text-2xl' onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <h2 className='text-2xl font-semibold mb-4'>Enroll in the Program</h2>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Phone</label>
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                />
                {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>I am interested in</label>
                <select
                  name='interest'
                  value={formData.interest}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                >
                  <option value=''>Select an option</option>
                  <option>Interested in the program</option>
                  <option>Want to know more about the program</option>
                  <option>How to apply</option>
                  <option>Program schedule</option>
                  <option>Program fees</option>
                </select>
                {errors.interest && <p className='text-red-500 text-sm'>{errors.interest}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Additional Message</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full p-2 border border-gray-300 rounded'
                ></textarea>
              </div>
              <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');

import React, { useEffect, useState } from 'react';
import './Popup.scss'; // Make sure to create this file for the popup styles

const Popup = ({ closePopup }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.className === 'popup-overlay') {
        closePopup();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [closePopup]);

  return (
    <div className="popup-overlay z-10">
      <div className="popup">
        <h2>Early Bird Offer!</h2>
        <p>Don't miss out on our exclusive early bird offer.</p>
        <button className='bg-black text-white mt-[50px] rounded-lg' onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

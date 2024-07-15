import React from 'react';

import './Ticker.scss';

const Ticker = ({ offers }) => {


 
  return (
    <div className="ticker">
      <div className="ticker__track"
      onClick={()=>{     
        //navigate to '/elevate
        window.location.href = '/elevate'

      }}>
        {offers.map((offer, index) => (
          <div key={index} className="ticker__item" >
            {offer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

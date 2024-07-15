import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const successStories = [
  { 
    name: "Arun Mani, Marketing Director", 
    story: "After facing restructuring, Arun joined our program and with a revamped CV, strategic introductions, and psychological support, secured a senior role at a leading marketing firm within three months." 
  },
  { 
    name: "Ruchika Bhola, Senior Product Manager", 
    story: "Ruchika leveraged our network, innovative job search strategies, and social coaching to transition smoothly into a role at an emerging product company, perfectly aligned with her career ambitions." 
  }
];

const SuccessStories = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 15000); // 15000 milliseconds = 15 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white">
      <div className="flex items-center justify-center flex-col mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl w-full text-[#B1C000] font-bold mb-4">
          Success Stories
        </h2>
        <div className="w-full sm:w-[80%] rounded-xl p-8 sm:p-6">
          <Slider ref={sliderRef} {...settings}>
            {successStories.map((story, index) => (
             <div className="border-black  border-4 p-4 h-auto text-center mx-auto flex flex-col justify-center items-center" key={index}>
               <div className="border-[#B1C000] bg-white border-4 p-4 h-auto text-center mx-auto flex flex-col justify-center items-center"  >
                <h3 className="text-xl sm:text-2xl text-black font-semibold text-center mb-4">{story.name}</h3>
                <p className="text-lg sm:text-lg text-black font-light text-center">{story.story}</p>
              </div>
             </div>
            ))}
          </Slider>
        </div>
      </div>
    
    </section>
  );
}

export default SuccessStories;

import React from 'react';
import "./SuccessStories.scss";

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
  return (
    <section className="success-stories">
      <div className="container w-[100%]">
        <h2 className="head-text"><span>Success Stories:</span></h2>
        <div className=" flex items-center gap-4 justify-center w-[100%]">
          {successStories.map((story, index) => (
            <div className=" flex flex-col  p-4 md:h-[200px] shadow-lg justify-center gap-5" key={index}>
              <h3 className=" text-3xl" style={{ color: "var(--secondary-color)" }}>{story.name}</h3>
              <p className="text-lg">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories;

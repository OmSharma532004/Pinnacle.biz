// components/BlogPage.js
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

// data/blogs.js
 const blogs = [
    {
      title: "Striking the Balance: Navigating HR's Human-Automation Interplay",
      description: `In today's dynamic business environment, human resources (HR) stands at a crossroads, grappling with the delicate balance between automation and the essential human touch. While automation promises efficiency, the risk of dehumanizing the workplace looms large. Many organizations turn to strategic HR outsourcing to harmonize manual and automated processes, ensuring a workplace that values both productivity and the well-being of employees.`,
      content: [
        "Automation Efficiency: The allure of automation, with promises of streamlined processes and data-driven decisions, has led to a rush towards complete mechanization of HR functions. However, this comes at the cost of overlooking employees' unique experiences and challenges.",
        "Strategic Outsourcing: Recognizing this, strategic outsourcing emerges as a proactive strategy to maintain a human-centric approach.",
        "Human-Centric Aspects: Outsourcing HR functions allows organizations to optimize human-centric aspects like employee engagement and talent development. This ensures a personalized approach and empowers internal HR teams to focus on strategic initiatives.",
        "Softwarization: Integrating software-based solutions in HR, must complement the human touch. Strategic outsourcing aids in achieving this synergy, navigating the evolving HR technology landscape for enhanced employee experiences."
      ]
    },
    {
      title: "Navigating Market Contraction: The Strategic Imperative for Diverse Talent in a Globalized Economy",
      description: `In an era marked by rapid technological advancements, geopolitical shifts, and unprecedented global challenges, the business world is undergoing a profound transformation. One key dynamic reshaping the global market is the phenomenon of market shrinkage, where businesses adapt to a more compact and interconnected economic environment. The demand for diverse talent has become crucial, as companies navigate the complexities of a shrinking market requiring innovative solutions and a nuanced understanding of diverse markets and consumers.`,
      content: [
        "Global Market Transformation: The traditional paradigm of a vast, expansive global market is evolving into a more intricate network of interconnected economies.",
        "Diverse Talent: The need for a diverse talent pool emerges as a strategic imperative, with diversity encompassing a range of experiences, educational backgrounds, and perspectives.",
        "Creativity and Innovation: One primary driver behind the demand for diverse talent is the recognition that a variety of perspectives fosters creativity and innovation.",
        "Adaptability and Resilience: The evolving nature of the global market demands an adaptable and resilient workforce. Individuals with diverse experiences bring a crucial level of agility in the face of uncertainty."
      ]
    },
    {
      title: "Business HR Process Outsourcing: Maximizing Efficiency and Focus",
      description: `In today's dynamic business environment, the quest for operational excellence has led many organizations to explore innovative strategies. One such approach gaining prominence is Business HR Process Outsourcing (BPO). This article delves into the concept, advantages, considerations, and the pivotal role it plays in sharpening organizational focus.`,
      content: [
        "Cost Efficiency: Outsourcing HR processes translates to significant cost savings. By sidestepping in-house HR department expenses, such as salaries organizations can channel resources strategically, fostering growth.",
        "Focus on Core Competencies: With routine HR tasks outsourced, internal teams can focus on core competencies. This strategic reallocation of resources enables businesses to concentrate on initiatives directly impacting the bottom line.",
        "Access to Expertise: Outsourcing partners bring specialized knowledge and experience to HR functions. This ensures efficient processes executed in compliance with industry regulations, reducing the risk of errors and legal complications.",
        "Scalability: HR outsourcing offers scalability to match workforce fluctuations. Providers adapt to changing needs, providing flexibility during periods of expansion or contraction.",
        "Enhanced Technology: Outsourcing partners leverage advanced HR technology, providing access to cutting-edge tools without significant upfront investments. This contributes to improved efficiency, accuracy, and data security."
      ]
    },
    {
      title: "Elevating Excellence: The Strategic Integration of Work Culture, Training, and Human Resource Management",
      description: `In the contemporary business landscape, success is the result of seamlessly blending work culture, training initiatives, and meticulous human resource management. These elements not only define an organization's ethos but also act as catalysts for innovation, resilience, and employee fulfillment.`,
      content: [
        "Cultivating a Dynamic Work Culture: Organizational excellence pivots on a robust work culture. Fostering open communication, inclusivity, and a shared purpose creates an environment conducive to employee growth.",
        "Empowering through Strategic Training Initiatives: Strategic investment in comprehensive training is crucial for maintaining competitiveness. Beyond skill enhancement, it cultivates a workforce adept at embracing change.",
        "Human Resources as Strategic Assets: Acknowledging human resources as strategic assets involves prioritizing both physical and mental well-being. Beyond conventional benefits, championing work-life balance and fostering a supportive habitat is paramount.",
        "The Interconnected Framework: This triad—work culture, training, and human resource management—operates as a cohesive framework. A positive culture amplifies training effectiveness, creating a receptive ecosystem. A skilled workforce enriches the organizational culture. "
      ]
    }
  ];
  

const BlogPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blog = blogs[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < blogs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen w-full  flex flex-col items-center justify-center p-4 mt-[100px]">
        <Navbar />
        <div className="flex justify-between my-7 w-full  max-w-[70%] mt-8">
        <button
          onClick={handlePrev}
          className={`px-4 py-2 rounded-lg ${currentIndex === 0 ? 'bg-gray-300' : 'bg-[#B1C000] text-white'}`}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg ${currentIndex === blogs.length - 1 ? 'bg-gray-300' : 'bg-[#B1C000] text-white'}`}
          disabled={currentIndex === blogs.length - 1}
        >
          Next
        </button>
      </div>
      <header className="bg-white w-[70%] p-8 rounded-lg flex flex-col items-start gap-5 justify-center mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="md:text-5xl lg:text-5xl text-2xl  font-bold text-gray-800">{blog.title}</h1>
        </div>
        <p className="md:text-lg lg:text-lg texr-sm mb-4 text-gray-700">{blog.description}</p>
        
        <div className="header-buttons">
          <a
            rel="noreferrer"
            className="bg-[#B1C000] text-white px-4 py-2 rounded-lg"
            href="https://calendly.com/contact-pinnacle/book-a-meeting"
          >
            Get Started
          </a>
        </div>
      
      </header>

      <section className="bg-white flex flex-col items-center justify-center p-8 rounded-lg ">
      
        <div className="flex mt-[50px] flex-col w-[70%] flex-wrap gap-6">
          {blog.content.map((advantage, index) => (
            <div key={index} className=" flex items-start justify-start flex-col p-6 rounded-lg shadow-sm">
              <h2 className="md:text-xl lg:text-xl text-lg font-semibold text-[#B1C000] mb-2">{advantage.split(':')[0]}</h2>
              <p className="md:text-lg lg:text-lg text-sm text-justify text-gray-700">{advantage.split(':')[1]}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="flex justify-between my-9 w-full max-w-[70%] mt-8">
        <button
          onClick={handlePrev}
          className={`px-4 py-2 rounded-lg ${currentIndex === 0 ? 'bg-gray-300' : 'bg-[#B1C000] text-white'}`}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg ${currentIndex === blogs.length - 1 ? 'bg-gray-300' : 'bg-[#B1C000] text-white'}`}
          disabled={currentIndex === blogs.length - 1}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

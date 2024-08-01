import React from "react";
import Page from "../../components/Template/Page";
import Navbar from "../../components/Navbar/Navbar";

const contractualHiringData = {
    title: "Pinnacle’s Contractual Hiring Staffing Solution",
    description: "Contractual hiring is a strategic approach to recruitment that offers flexibility, cost-effectiveness, access to specialized skills, and reduced risk. At Pinnacle, we offer contractual hiring solutions to meet your business's dynamic needs. Our expertise ensures access to high-caliber talent for specific projects, seasonal demands, or specialized tasks.",
    ctaButton: "Get Started - calendly link",
    advantages: [
      "Seamless Recruitment Process: We meticulously match your project requirements with the best candidates from our network, ensuring the right fit for your needs.",
      "Cost Efficiency: Reduced recruitment costs with a project-based payment model that allows you to pay only for the expertise you need when you need it, using our platform.",
      "Client-Centric Approach: We prioritize your business goals and work closely with you to provide customized solutions that align with your objectives.",
      "Flexibility and Scalability: Pinnacle’s Contractual hiring provides the flexibility to adjust your workforce according to business needs, enabling quick scale-up or down based on workload, seasonal demands, or business changes.",
      "Access to Specialized Talent: Access a wide array of top talent from our extensive network and leverage on-demand expertise to find the perfect match for your project, drawing from a network of highly skilled professionals with specialized skills tailored to meet your specific project needs.",
     
    ]
  };
  
const Contractual = () => {
    return (

       <>
       <Navbar/>
        <Page data={contractualHiringData}/>
        </>
    );
    }

export default Contractual;
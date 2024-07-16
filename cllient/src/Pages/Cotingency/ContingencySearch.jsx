import React from "react";
import Page from "../../components/Template/Page";
import Navbar from "../../components/Navbar/Navbar";
import exp from "constants";

const contingencyData = {
    title: "Pinnacle’s Contingency Hiring Practice",
    description: "In the context of recruitments, contingent stands for conversion/closure-based fees that Pinnacle charges our clients on successfully filling your organization’s open position.",
    advantages: [
      "Reduced fees: With contingency hiring you only have to pay for the successful hire that you make using our platforms.",
      "Quick turnaround: If your organization needs to fulfil a role quickly you should most certainly assess this option to onboard the right candidate for the role without losing much time. Every day, week, or month where a critical position remains vacant you lose much more money as a business.",
      "No need for in house recruiters/ recruitment teams: Recruitments are often not an annual process and generally an organization hires when it scales up or when it needs to back fill for a role. Outsourcing your recruiting efforts means you don’t have to set up full-fledged recruiting/ talent acquisition teams and bear their cost perennially.",
      "No long-term commitments: We operate on a project-to-project basis so you don’t have to commit any funds towards retaining us as a partner.",
      "Quality guarantee: With Pinnacle’s experience and industry expertise you can be rest assured that you will always be able to hire the most relevant candidate for your open position."
    ],
    contact: "For more information on how Pinnacle can assist with your recruitment needs please contact us at contact@pinnacle.biz"
  };

const Contingency = () => {
    return (
       <>
       <Navbar/>
        <Page data={contingencyData}/>
        </>
    );
    }


    export default Contingency;
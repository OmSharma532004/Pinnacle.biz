import React from 'react';
import { useParams, Link } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Quality Analyst - Bank',
    experience: '4 - 8 yrs',
    location: 'Mumbai',
    posted: '6 days ago',
    icon: '/path/to/icon1.png',
    details: `1. Test Planning and Design:
      - Develop comprehensive test plans based on project specifications.
      - Design and document test cases for web, mobile, API, and database testing.
      - Collaborate with development teams to understand system requirements.
      
      2. Automation Testing:
      - Develop and maintain automated test scripts using industry-standard tools (e.g., Selenium, etc.).`
  },
  {
    id: 2,
    title: 'Vice President/Senior Vice President - Control Testing Automation',
    experience: '13 - 20 yrs',
    location: 'Bangalore',
    posted: '1 week ago',
    icon: '/path/to/icon2.png',
    details: `1. Lead the control testing automation initiatives across various platforms.
      2. Ensure compliance with industry standards and regulations.
      3. Collaborate with cross-functional teams to streamline processes.`
  },
  {
    id: 3,
    title: 'Chief Manager - Digital Assets',
    experience: '6 - 8 yrs',
    location: 'Mumbai',
    posted: '1 week ago',
    icon: '/path/to/icon3.png',
    details: `1. Oversee the digital assets management.
      2. Implement strategies for digital asset growth.
      3. Manage a team of digital asset specialists.`
  },
  {
    id: 4,
    title: 'Manager - Software Quality Assurance - Global Products',
    experience: '15 - 17 yrs',
    location: 'Chennai',
    posted: '2 weeks ago',
    icon: '/path/to/icon4.png',
    details: `1. Manage the software quality assurance processes.
      2. Develop global quality standards.
      3. Lead a team of quality assurance engineers.`
  },
  {
    id: 5,
    title: 'Senior Analyst - Tax Technology - Consulting Firm',
    experience: '3 - 15 yrs',
    location: 'Mumbai',
    posted: '2 weeks ago',
    icon: '/path/to/icon5.png',
    details: `1. Analyze and implement tax technology solutions.
      2. Provide consulting services to clients.
      3. Develop and maintain tax software.`
  }
];

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));
  if (!job) return <div>Job not found</div>;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#B1C000]">{job.title}</h2>
          <p className="text-gray-500">{job.posted}</p>
        </div>
        <p className="text-gray-600 mb-4">{job.experience} • {job.location}</p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <pre className="whitespace-pre-wrap">{job.details}</pre>
        </div>
       <div className=' flex items-center justify-around'>
       <Link to="/jobs" className="text-[#B1C000] hover:underline">Back to Job Feed</Link>
       <Link to="/signup" className="text-white bg-[#B1C000] mt-4 p-4 hover:underline ml-4">Apply Now</Link>
       </div>
      </div>
    </div>
  );
};

export default JobDetails;

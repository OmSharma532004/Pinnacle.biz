import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

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

const JobList = () => (
  <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
    <Navbar />
    <div className="bg-white p-6 sm:p-8  sm:mt-[100px] mt-[100px] rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#B1C000] mb-4 sm:mb-0">My Jobfeed</h2>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <select className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
            <option>Date</option>
            <option>Relevance</option>
          </select>
          <select className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
            <option>Locations</option>
            <option>Metros</option>
            <option>Anywhere in India/Multiple Locations</option>
            <option>Overseas/International</option>
          </select>
          <select className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
            <option>Experience</option>
          </select>
          <button className="border border-[#B1C000] p-2 rounded bg-[#B1C000] text-white">Filter</button>
        </div>
      </div>
      {jobs.map((job) => (
        <Link to={`/job/${job.id}`} key={job.id}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border-b hover:bg-gray-50 transition duration-150">
             <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{job.title}</h3>
              <p className="text-gray-600">{job.experience} • {job.location}</p>
            </div>
            <p className="text-gray-500 mt-2 sm:mt-0">{job.posted}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default JobList;

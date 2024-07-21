import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filter, setFilter] = useState({
        date: '',
        location: '',
        experience: ''
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/all`);
            setJobs(response.data);
            setFilteredJobs(response.data); // Initialize filteredJobs with all jobs
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const handleFilterChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    const handleFilterApply = () => {
        let filtered = [...jobs];

        if (filter.date) {
            filtered = filtered.sort((a, b) => {
                if (filter.date === 'recent') {
                    return new Date(b.posted) - new Date(a.posted);
                } else if (filter.date === 'oldest') {
                    return new Date(a.posted) - new Date(b.posted);
                }
                return 0;
            });
        }

        if (filter.location) {
            filtered = filtered.filter(job => job.location.toLowerCase().includes(filter.location.toLowerCase()));
        }

        if (filter.experience) {
            filtered = filtered.filter(job => {
                const experienceRange = filter.experience.split('-');
                const minExperience = parseInt(experienceRange[0], 10);
                const maxExperience = experienceRange[1] ? parseInt(experienceRange[1], 10) : Infinity;
                const jobExperience = parseInt(job.experience.split('-')[0], 10);
                return jobExperience >= minExperience && jobExperience <= maxExperience;
            });
        }

        setFilteredJobs(filtered);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
            <Navbar />
            <div className="bg-white p-6 sm:p-8 sm:mt-[100px] mt-[100px] rounded-lg shadow-md">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#B1C000] mb-4 sm:mb-0">My Jobfeed</h2>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        <select name="date" value={filter.date} onChange={handleFilterChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
                            <option value="">Date</option>
                            <option value="recent">Recent</option>
                            <option value="oldest">Oldest</option>
                        </select>
                        <select name="location" value={filter.location} onChange={handleFilterChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
                            <option value="">Locations</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Gurugram">Gurugram</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Pune">Pune</option>
                        </select>
                        <select name="experience" value={filter.experience} onChange={handleFilterChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
                            <option value="">Experience</option>
                            <option value="0-2">0-2 years</option>
                            <option value="2-5">2-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                        </select>
                        <button onClick={handleFilterApply} className="border border-[#B1C000] p-2 rounded bg-[#B1C000] text-white">Filter</button>
                    </div>
                </div>
                {filteredJobs.map((job) => (
                  job.removed==false&&
                  <Link to={`/job/${job._id}`} key={job._id}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 border-b hover:bg-gray-50 transition duration-150">
                      <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <p className="text-gray-600">{job.experience} • {job.location}</p>
                      </div>
                      <p className="text-gray-500 mt-2 sm:mt-0">{new Date(job.posted).toLocaleDateString()}</p>
                  </div>
              </Link>
                ))}
            </div>
        </div>
    );
};

export default JobList;

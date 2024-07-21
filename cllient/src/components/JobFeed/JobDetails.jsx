import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobDetails();
    }, [id]);

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${id}`);
            setJob(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const handleApplyClick = () => {
        if (user) {
            navigate(`/apply/${id}`);
        } else {
            alert('Please login to apply for the job');
            window.location.href = '/login';
        }
    };

    if (!job) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
            <Navbar />
            <div className="bg-white mt-[100px] p-8 rounded-lg shadow-md w-full max-w-7xl">
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-[#B1C000]">{job.title}</h2>
                        <p className="text-gray-500">{new Date(job.posted).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-600 text-lg"><span className="font-semibold">Experience:</span> {job.experience}</p>
                        <p className="text-gray-600 text-lg"><span className="font-semibold">Location:</span> {job.location}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-gray-700">{job.details}</pre>
                    </div>
                </div>
                {job.skills && job.skills.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills Required</h3>
                        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
                            {job.skills.map((skill, index) => (
                                <li key={index} className="text-gray-700">{skill}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <Link to="/jobs" className="text-[#B1C000] hover:underline">Back to Job Feed</Link>
                    <button onClick={handleApplyClick} className="text-white bg-[#B1C000] py-2 px-6 rounded hover:bg-[#9DA300] transition duration-200">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;

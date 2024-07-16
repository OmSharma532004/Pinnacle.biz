import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const AdminJobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchJobDetails();
        fetchApplications();
    }, [id]);

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${id}`);
            setJob(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const fetchApplications = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/application/job/${id}`);
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    if (!job) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 ">
        
           
            <div className="bg-white mt-[100px] p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-[#B1C000] mb-6">{job.title}</h2>
                <div className="mb-6">
                    <p className="text-gray-600 text-lg"><span className="font-semibold">Experience:</span> {job.experience}</p>
                    <p className="text-gray-600 text-lg"><span className="font-semibold">Location:</span> {job.location}</p>
                    <p className="text-gray-600 text-lg"><span className="font-semibold">Posted:</span> {new Date(job.posted).toLocaleDateString()}</p>
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
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h3>
                    {applications.length > 0 ? (
                        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
                            {applications.map((app) => (
                                <li key={app._id} className="text-gray-700">
                                    <p className="mb-2"><span className="font-semibold">Name:</span> {app.userId.name}</p>
                                    <p className="mb-2"><span className="font-semibold">Email:</span> {app.userId.email}</p>
                                    <p className="mb-2"><span className="font-semibold">Cover Letter:</span> {app.coverLetter}</p>
                                    <p className="mb-2"><span className="font-semibold">Status:</span> {app.status}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No applications available.</p>
                    )}
                </div>
                <Link to="/admin/jobs" className="text-[#B1C000] hover:underline">Back to Manage Jobs</Link>
            </div>
        </div>
    );
};

export default AdminJobDetails;

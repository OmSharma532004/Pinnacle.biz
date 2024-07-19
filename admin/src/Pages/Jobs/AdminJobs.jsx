import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/all`);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const deleteJob = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_LOCALHOST}/job/delete/${id}`);
            setJobs(jobs.filter(job => job._id !== id));
            alert('Job deleted successfully');
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Error deleting job');
        }
    };

    const copyUrlToClipboard = (id) => {
        const url = `https://pinnacle.biz/job/${id}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL copied to clipboard');
        }).catch(err => {
            console.error('Error copying URL:', err);
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-[#B1C000] mb-6">Admin: Manage Jobs</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto">
                {jobs.length > 0 ? (
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Experience</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id} className="border-b">
                                    <td className="px-4 py-2">{job.title}</td>
                                    <td className="px-4 py-2">{job.experience}</td>
                                    <td className="px-4 py-2">{job.location}</td>
                                    <td className="px-4 py-2 flex space-x-4">
                                        <Link to={`/admin/edit/${job._id}`} className="text-blue-600 hover:underline">Edit</Link>
                                        <button onClick={() => deleteJob(job._id)} className="text-red-600 hover:underline">Delete</button>
                                        <Link to={`/admin/view/${job._id}`} className="text-[#B1C000] hover:underline">View</Link>
                                        <button onClick={() => copyUrlToClipboard(job._id)} className="text-green-600 hover:underline">Share</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-600">No jobs available.</p>
                )}
            </div>
        </div>
    );
};

export default AdminJobs;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('newest');

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        fetchJobs();
    }, [searchQuery, sortOrder]);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/all`);
            let filteredJobs = response.data.filter(job =>
                job.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (sortOrder === 'newest') {
                filteredJobs = filteredJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else {
                filteredJobs = filteredJobs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            }

            setJobs(filteredJobs);
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
                <div className="flex justify-between mb-4">
                    <input
                        type="text"
                        placeholder="Search jobs by title..."
                        className="border border-gray-300 p-2 rounded w-full max-w-xs"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div>
                        <label className="mr-2">Sort by:</label>
                        <select
                            className="border border-gray-300 p-2 rounded"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>
                {jobs.length > 0 ? (
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Date </th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                               job.removed==false&&
                               <tr key={job._id} className="border-b">
                               <td className="px-4 py-2">{job.title}</td>
                               <td className="px-4 py-2">{new Date(job.posted).toLocaleDateString()}</td>
                               <td className="px-4 py-2">{job.location}</td>
                               <td className="px-4 py-2 flex space-x-4">
                                   <Link to={`/admin/edit/${job._id}`} className="text-blue-600 hover:underline">Edit</Link>
                                   <button onClick={() => deleteJob(job._id)} className="text-red-600 hover:underline">Remove</button>
                                   <Link to={`/admin/view/${job._id}`} className="text-[#B1C000] hover:underline">View</Link>
                                   <button onClick={() => copyUrlToClipboard(job._id)} className="text-green-600 hover:underline">Share</button>
                               </td>
                           </tr>
                            ))}
                             {jobs.map((job) => (
                               job.removed==true&&
                               <tr key={job._id} className="border-b bg-gray-300">
                               <td className="px-4 py-2">{job.title}</td>
                               <td className="px-4 py-2">{new Date(job.posted).toLocaleDateString()}</td>
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

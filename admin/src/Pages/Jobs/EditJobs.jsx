import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        experience: '',
        location: '',
        posted: '',
        details: '',
        skills: '',
        keywords: '',

    });

    useEffect(() => {
        fetchJobDetails();
    }, [id]);

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${id}`);
            const job = response.data;
            setFormData({
                title: job.title,
                experience: job.experience,
                location: job.location,
                posted: job.posted,
                details: job.details,
                skills: job.skills.join(', '),
                keywords: job.keywords.join(', ')
            });
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, experience, location, posted, icon, details, skills,keywords } = formData;
        const jobData = {
            title,
            experience,
            location,
            posted,
            details,
            skills: skills.split(',').map(skill => skill.trim()),
            keywords: keywords.split(',').map(keyword => keyword.trim())

        };
        
        try {
            await axios.put(`${import.meta.env.VITE_LOCALHOST}/job/update/${id}`, jobData);
            alert('Job updated successfully');
            navigate('/alljobs');
        } catch (error) {
            console.error('Error updating job:', error);
            alert('Error updating job');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-[#B1C000] mb-6">Edit Job</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Experience</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Posted Date</label>
                        <input
                            type="date"
                            name="posted"
                            value={formData.posted}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700">Icon URL</label>
                        <input
                            type="text"
                            name="icon"
                            value={formData.icon}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Details</label>
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Skills (comma separated)</label>
                        <input
                            type="text"
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Keywords (comma separated)</label>
                        <input
                            type="text"
                            name="keywords"
                            value={formData.keywords}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#B1C000] text-white py-3 px-6 rounded-md hover:bg-[#9DA300] focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Update Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditJob;

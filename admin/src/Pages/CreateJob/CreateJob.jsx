import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        experience: '',
        location: '',
        posted: '',
       
        details: '',
        skills: '',
        keywords: ''
    });

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
            const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/job/register`, jobData);
            console.log(response.data);
            alert('Job registered successfully');
        } catch (error) {
            console.error('Error registering job:', error);
            alert('Error registering job');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-10">
            <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Register Job</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
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
                        <div>
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
                        <div>
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
                        <div>
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
                       
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Details</label>
                        <textarea
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-6">
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
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Register Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobForm;

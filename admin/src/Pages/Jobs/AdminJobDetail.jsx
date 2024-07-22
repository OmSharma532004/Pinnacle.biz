import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const AdminJobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [applications, setApplications] = useState([]);
    const [profiles, setProfiles] = useState({});
    const [searchName, setSearchName] = useState('');
    const [filterExperience, setFilterExperience] = useState('');
    const [sortOrder, setSortOrder] = useState('most_experience');

    useEffect(() => {
        fetchJobDetails();
        fetchApplications();
    }, [id]);

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${id}`);
            setJob(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const fetchApplications = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/application/job/${id}`);
            setApplications(response.data);
            fetchProfiles(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        }
    };

    const fetchProfiles = async (applications) => {
        const userIds = applications.map(app => app.userId._id || app.userId);
        const uniqueUserIds = [...new Set(userIds)];
        const profilePromises = uniqueUserIds.map(userId => 
            axios.get(`/admin/currentplan/${userId}`)
        );

        try {
            const profileResponses = await Promise.all(profilePromises);
            const profilesMap = profileResponses.reduce((acc, response) => {
                acc[response.data.user._id] = response.data.profile;
                return acc;
            }, {});
            setProfiles(profilesMap);
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    };

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value);
    };

    const handleFilterExperienceChange = (event) => {
        setFilterExperience(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const filterAndSortApplications = () => {
        let filteredApplications = applications;

        if (searchName) {
            filteredApplications = filteredApplications.filter(app => 
                profiles[app.userId._id || app.userId]?.fullName.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (filterExperience) {
            filteredApplications = filteredApplications.filter(app => 
                profiles[app.userId._id || app.userId]?.experience.toLowerCase().includes(filterExperience.toLowerCase())
            );
        }

        if (sortOrder === 'newest') {
            filteredApplications = filteredApplications.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
        } else if (sortOrder === 'oldest') {
            filteredApplications = filteredApplications.sort((a, b) => new Date(a.appliedDate) - new Date(b.appliedDate));
        } else if (sortOrder === 'most_experience') {
            filteredApplications = filteredApplications.sort((a, b) => {
                const expA = profiles[a.userId._id || a.userId]?.experience || '0';
                const expB = profiles[b.userId._id || b.userId]?.experience || '0';
                return parseExperience(expB) - parseExperience(expA);
            });
        }

        return filteredApplications;
    };

    const parseExperience = (experience) => {
        const [minExp, maxExp] = experience.split(' to ').map(Number);
        return maxExp || minExp || 0;
    };

    if (!job) return <div>Loading...</div>;

    const filteredApplications = filterAndSortApplications();

    return (
        <div className="min-h-screen bg-gray-100">
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
                 {job.keywords && job.keywords.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills Required</h3>
                        <ul className="list-disc list-inside bg-gray-100 p-4 rounded-lg">
                            {job.keywords.map((keyword, index) => (
                                <li key={index} className="text-gray-700">{keyword}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h3>
                    <div className="mb-4 flex space-x-4">
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={handleSearchNameChange}
                            className="px-4 py-2 border rounded-lg"
                        />
                        <select value={sortOrder} onChange={handleSortOrderChange} className="px-4 py-2 border rounded-lg">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="most_experience">Most Experience</option>
                       
                            </select>
                    </div>
                    {filteredApplications.length > 0 ? (
                        <div className="space-y-4">
                            {filteredApplications.map((app) => {
                                const profile = profiles[app.userId._id || app.userId];
                                return (
                                    <div key={app._id} className="bg-white p-4 rounded-lg shadow-md flex justify-between px-[100px] items-center space-x-4">
                                        
                                        <div className=" ">
                                            <h2 className="text-xl font-bold">{profile?.fullName || 'N/A'}</h2>
                                            <p className="text-gray-600"><span className="font-semibold">Experience:</span> {profile?.experience || 'N/A'}</p>
                                            <p className="text-gray-600"><span className="font-semibold">Location:</span> {job.location|| 'N/A'}</p>
                                            <p className="text-gray-600"><span className="font-semibold">Applied on:</span> {new Date(app.appliedDate).toLocaleDateString()}</p>
                           
                                        </div>
                                        <div>
                                        <p className="text-gray-600"><span className="font-semibold">Status:</span> {app.status}</p>
                                            <p className="text-gray-600"><span className="font-semibold">Phone No:- {profile?.phoneNumber }</span></p>
                                            <div className="mt-2">
                                                <Link
                                                    to={`/admin/application/${app._id}`}
                                                    className="text-[#B1C000] hover:underline mr-4"
                                                >
                                                    View Details
                                                </Link>

                                            </div>
                                            </div>
                                    </div>
                                );
                            })}
                        </div>
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminApplications = () => {
    const [applications, setApplications] = useState([]);
    const [profiles, setProfiles] = useState({});
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [filter, setFilter] = useState({
        date: 'newest',
        search: ''
    });
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/application/getall`);
            const sortedApplications = response.data.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
            setApplications(sortedApplications);
            setFilteredApplications(sortedApplications);
            fetchProfiles(sortedApplications);
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

    const handleFilterChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    };

    const handleSearchChange = (e) => {
        setFilter({
            ...filter,
            search: e.target.value
        });
    };

    const handleFilterApply = () => {
        let filtered = [...applications];

        if (filter.date) {
            filtered = filtered.sort((a, b) => {
                if (filter.date === 'newest') {
                    return new Date(b.appliedDate) - new Date(a.appliedDate);
                } else if (filter.date === 'oldest') {
                    return new Date(a.appliedDate) - new Date(b.appliedDate);
                }
                return 0;
            });
        }

        if (filter.search) {
            filtered = filtered.filter(app => app.userId.name.toLowerCase().includes(filter.search.toLowerCase()));
        }

        setFilteredApplications(filtered);
    };

    useEffect(() => {
        handleFilterApply();
    }, [filter]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-[#B1C000] mb-6">Admin: Manage Applications</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto">
                {statusMessage && <p className="text-green-500 mb-4">{statusMessage}</p>}
                <div className="mb-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <select name="date" value={filter.date} onChange={handleFilterChange} className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                    <input
                        type="text"
                        name="search"
                        value={filter.search}
                        onChange={handleSearchChange}
                        placeholder="Search by user name"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:border-green-500"
                    />
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
        </div>
    );
};

export default AdminApplications;

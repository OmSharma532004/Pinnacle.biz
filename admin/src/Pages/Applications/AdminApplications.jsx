import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminApplications = () => {
    const [applications, setApplications] = useState([]);
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
        } catch (error) {
            console.error('Error fetching applications:', error);
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
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">Applicant Name</th>
                                <th className="border px-4 py-2">Status</th>
                                <th className="border px-4 py-2">Date Posted</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplications.map((app) => (
                                <tr key={app._id} className={`border-b ${app.status !== 'pending' ? 'opacity-50' : ''} text-center`}>
                                    <td className="border px-4 py-2">{app.userId.name}</td>
                                    <td className="border px-4 py-2 capitalize">{app.status}</td>
                                    <td className="border px-4 py-2">{new Date(app.appliedDate).toLocaleDateString()}</td>
                                    <td className="border px-4 py-2">
                                        <Link
                                            to={`/admin/application/${app._id}`}
                                            className="text-[#B1C000] hover:underline"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminApplications;

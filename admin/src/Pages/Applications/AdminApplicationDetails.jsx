import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AdminApplicationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [application, setApplication] = useState(null);
    const [user, setUser] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        fetchApplicationDetails();
    }, [id]);

    const fetchApplicationDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/application/detail/${id}`);
            setApplication(response.data);
            // console.log(response.data.userId);
            fetchUserDetails(response.data.userId);
        } catch (error) {
            console.error('Error fetching application details:', error);
        }
    };

    const fetchUserDetails = async (userId) => {
        try {
            const response = await axios.get(`/admin/user/${userId}`);
            setUser(response.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleStatusChange = async (status) => {
        try {
            await axios.put(`${import.meta.env.VITE_LOCALHOST}/application/${status}/${id}`);
            setStatusMessage(`Application ${status}ed successfully`);
            setTimeout(() => {
                navigate('/admin/applications');
            }, 3000);
        } catch (error) {
            console.error(`Error ${status}ing application:`, error);
            setStatusMessage(`Error ${status}ing application`);
            setTimeout(() => {
                setStatusMessage('');
            }, 3000);
        }
    };

    if (!application || !user) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-[#B1C000] mb-6">Application Details</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto">
                {statusMessage && <p className="text-green-500 mb-4">{statusMessage}</p>}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Applicant Information</h2>
                    <p className="mb-2"><span className="font-semibold">Name:</span> {user.name}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p className="mb-2"><span className="font-semibold">Address:</span> {user.address}</p>
                    <p className="mb-2"><span className="font-semibold">CV:</span> <a href={user.cv} target="_blank" className="text-[#B1C000] hover:underline">View CV</a></p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Application Information</h2>
                    <p className="mb-2"><span className="font-semibold">Job Title:</span> {application.jobId.title}</p>
                    <p className="mb-2"><span className="font-semibold">Cover Letter:</span></p>
                    <p className="bg-gray-100 p-2 rounded">{application.coverLetter}</p>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => handleStatusChange('accept')}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
                        disabled={application.status !== 'pending'}
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => handleStatusChange('reject')}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
                        disabled={application.status !== 'pending'}
                    >
                        Reject
                    </button>
                    <button
                        onClick={() => navigate('/admin/applications')}
                        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
                    >
                        Back to Applications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminApplicationDetails;

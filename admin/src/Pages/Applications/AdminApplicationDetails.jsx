import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const AdminApplicationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [application, setApplication] = useState(null);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [profile, setProfile] = useState(null);
    const [job, setJob] = useState(null);
    const [jobId, setJobId] = useState(null);

    useEffect(() => {
        fetchApplicationDetails();
    }, [id]);

    const fetchApplicationDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/application/detail/${id}`);
            setApplication(response.data);
            setJobId(response.data.jobId);
            setUserId(response.data.userId);
            
        } catch (error) {
            console.error('Error fetching application details:', error);
        }
    };
    useEffect(() => {
        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);
    const fetchJobDetails = async () => {
        try {
            console.log(jobId);
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${jobId}`);
            setJob(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUserPlan(userId);
        }
    }, [userId]);

    const fetchUserPlan = async (userId) => {
        try {
            const response = await axios.get(`/admin/currentplan/${userId}`);
            setUser(response.data.user);
            setProfile(response.data.profile);
        } catch (error) {
            console.log(error);
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

    if (!application || !user || !profile) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-[#B1C000] mb-6">Application Details</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-7xl mx-auto">
                {statusMessage && <p className="text-green-500 mb-4">{statusMessage}</p>}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Applicant Information</h2>
                    <p className="mb-2"><span className="font-semibold">Name:</span> {user.name}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
                     </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                    <p className="mb-2"><span className="font-semibold">Full Name:</span> {profile.fullName}</p>
                    <p className="mb-2"><span className="font-semibold">Phone Number:</span> {profile.phoneNumber}</p>
                    <p className="mb-2"><span className="font-semibold">Experience:</span> {profile.experience}</p>
                    <p className="mb-2"><span className="font-semibold">Specialization:</span> {profile.specialization}</p>
                    <p className="mb-2"><span className="font-semibold">Education:</span> {profile.education}</p>
                    <p className="mb-2"><span className="font-semibold">Resume:</span> <a href={profile.resume} target="_blank" className="text-[#B1C000] hover:underline">View Resume</a></p>
                    <p className="mb-2"><span className="font-semibold">LinkedIn:</span> <a href={profile.linkedIn} target="_blank" className="text-[#B1C000] hover:underline">View LinkedIn</a></p>
                    <p className="mb-2"><span className="font-semibold">Organization:</span> {profile.organization}</p>
                    <p className="mb-2"><span className="font-semibold">Contact Method:</span> {profile.contactMethod}</p>
                    <p className="mb-2"><span className="font-semibold">Additional Info:</span> {profile.additionalInfo}</p>
                    <p className="mb-2"><span className="font-semibold">Referral Source:</span> {profile.referralSource}</p>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Application Information</h2>
                    <p className="mb-2"><span className="font-semibold">Job Title:</span> {job.title}</p>
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

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import Navbar from '../Navbar/Navbar';

const ApplicationFormPage = () => {
    const { jobId } = useParams();
    const user = useSelector(state => state.auth.user);
    const [job, setJob] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); // Define step state
    const [Preferences, setPreferences] = useState(''); // Define Preferences state
    const navigate = useNavigate();

    useEffect(() => {
        fetchJobDetails();
        fetchUserProfile();
    }, []);

    const fetchJobDetails = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_LOCALHOST}/job/${jobId}`);
            setJob(response.data);
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/user/getProfile');
            setUserProfile(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/application/apply`, {
                userId: user.id,
                jobId,
                coverLetter,
            });
            toast.success('Application submitted successfully!', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
            });
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        } catch (error) {
            
            alert('Error submitting application:'+ error.response.data.message);
           
        }
    };

    if (loading) {
        return <Loader loading={loading} message={'Loading profile'} />;
    }

    if (!userProfile) {
        return (
            <div className="container mx-auto flex flex-col items-center justify-center h-screen p-3">
                <h1 className="text-3xl font-bold mb-4">User Profile</h1>
                <div className="p-6 bg-gray-100 rounded-lg text-center">
                    <p className="text-lg">No profile is made.</p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={() => {
                            navigate('/createProfile');
                        }}
                    >
                        Create Profile
                    </button>
                </div>
            </div>
        );
    }

    const {
        fullName,
        phoneNumber,
        experience,
        specialization,
        education,
        resume,
        linkedIn,
        organization,
        contactMethod,
    } = userProfile;

    if (!fullName || !phoneNumber || !experience || !specialization || !education || !resume || !organization || !contactMethod) {
        return (
            <div className="container mx-auto p-4">
                 <Navbar />
                <h1 className="text-3xl  mt-[100px]  font-bold mb-4">Please Review Your Details Before Submitting</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">It seems like some required fields are missing in your profile. Please update your profile.</h2>
                    </div>
                    <Link to={`/editProfile/${userProfile.userId}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-3xl mt-[100px]  font-bold mb-4">Please Review Your Details Before Submitting</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-lg font-semibold">Full Name:</h2>
                        <p>{fullName}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Phone:</h2>
                        <p>{phoneNumber}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Experience:</h2>
                        <p>{experience}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Specialization:</h2>
                        <p>{specialization}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Education:</h2>
                        <p>{education}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Organization:</h2>
                        <p>{organization}</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Contact Method:</h2>
                        <p>{contactMethod}</p>
                    </div>
                    {linkedIn && (
                        <div>
                            <h2 className="text-lg font-semibold">LinkedIn:</h2>
                            <a
                                href={linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View LinkedIn
                            </a>
                        </div>
                    )}
                    {resume && (
                        <div className="col-span-2">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                                <a
                                    href={resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    View Resume
                                </a>
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex justify-between mt-6">
                    <Link to={`/editProfile/${userProfile.userId}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit Profile
                        </button>
                    </Link>
                    <button
                        onClick={() => setStep(2)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Next
                    </button>
                </div>
            </div>
            {step === 2 && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Submit Your Cover Letter</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Preferences:</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                required
                            ></input>

                        </div>
                        
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Preferences:</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                value={Preferences}
                                onChange={(e) => setPreferences(e.target.value)}
                                required
                            ></input>
                        </div> */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#B1C000] text-white py-2 px-4 rounded hover:bg-[#9DA300] transition duration-200"
                            >
                                Apply
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ApplicationFormPage;

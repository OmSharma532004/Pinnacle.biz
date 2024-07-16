import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationDialog = ({ job, user, onClose }) => {
    const [coverLetter, setCoverLetter] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCoverLetterChange = (e) => {
        setCoverLetter(e.target.value);
    };
    console.log(user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_LOCALHOST}/application/apply`, {
                userId: user.id,
                jobId: job._id,
                coverLetter
            });
            setSuccessMessage('Application submitted successfully!');
            setErrorMessage('');
            setTimeout(() => {
                onClose();
            }, 2000);
        } catch (error) {
            console.error('Error submitting application:', error.response.data);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-[#B1C000] mb-4">Apply for {job.title}</h2>
                {successMessage ? (
                    <p className="text-green-500">{successMessage}</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
                            <p className="bg-gray-100 p-2 rounded">{user.name}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                            <p className="bg-gray-100 p-2 rounded">{user.email}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Cover Letter:</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded"
                                rows="4"
                                value={coverLetter}
                                onChange={handleCoverLetterChange}
                                required
                            ></textarea>
                        </div>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#B1C000] text-white py-2 px-4 rounded hover:bg-[#9DA300] transition duration-200"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default JobApplicationDialog;

const Job = require('../models/jobModel');

// Register a new job
const registerJob = async (req, res) => {
    try {
        const { title, experience, location, posted, icon, details, skills,keywords } = req.body;

        // Create a new job instance
        const newJob = new Job({
            title,
            experience,
            location,
            posted,
            details,
            skills,
            keywords
        });

        // Save the job to the database
        const savedJob = await newJob.save();

        res.status(201).json({
            message: 'Job registered successfully',
            job: savedJob
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error registering job',
            error: error.message
        });
    }
};

// Get all jobs sorted by the date posted
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({ posted: -1 });

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching jobs',
            error: error.message
        });
    }
};

// Get job details by ID
const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching job details',
            error: error.message
        });
    }
};

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const jobData = req.body;
        const updatedJob = await Job.findByIdAndUpdate(id, jobData, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating job',
            error: error.message
        });
    }
};

// Delete job by ID
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedJob = await Job.findByIdAndUpdate(id, {removed: true});
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting job',
            error: error.message
        });
    }
};

module.exports = {
    registerJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob

};

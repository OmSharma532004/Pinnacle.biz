const Application = require('../models/applicationModel');
const Job = require('../models/jobModel');
const User = require('../models/userModel');
const nodemailer = require('nodemailer');

// Apply for a job
const applyForJob = async (req, res) => {
    try {
        const { userId, jobId, coverLetter,preferences } = req.body;

        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        //check if user has already applied for job
        const applicationExists = await Application.findOne

        ({$and: [{userId: userId}, {jobId: jobId}]});
        if (applicationExists) {
            return res.status(400).json({ 
                success: false,
                message: 'You have already applied for this job' });
        }


        // Create a new application instance
        const newApplication = new Application({
            userId,
            jobId,
            coverLetter,
          
        });

        // Save the application to the database
        const savedApplication = await newApplication.save();

        // Add the application ID to the job's applications array
        job.applications.push(savedApplication._id);
        await job.save();

        res.status(201).json({
            message: 'Application submitted successfully',
            application: savedApplication
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error submitting application',
            error: error.message
        });
    }
};

const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().populate('userId jobId');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching applications',
            error: error.message
        });
    }
};

// Accept application
const acceptApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const application = await Application.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

          res.status(200).json({
            message: 'Application accepted',
            application
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error accepting application',
            error: error.message
        });
    }
};

// Reject application
const rejectApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const application = await Application.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });

        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        // Send confirmation email
      
        res.status(200).json({
            message: 'Application rejected',
            application
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error rejecting application',
            error: error.message
        });
    }
};

// Send confirmation email
const sendConfirmationEmail = async (userId, status) => {
    const user = await User.findById(userId);

    if (!user) {
        throw new Error('User not found');
    }

    let statusMessage;
    if (status === 'accepted') {
        statusMessage = 'Congratulations! Your job application has been accepted.';
    } else {
        statusMessage = 'We regret to inform you that your job application has been rejected.';
    }

    // Configure nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: user.email,
        subject: 'Job Application Status',
        text: statusMessage
    };

    await transporter.sendMail(mailOptions);
};

const getApplicationDetailsById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching application details',
            error: error.message
        });
    }
}

const getApplicationByJobId= async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.id }).populate('userId');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching applications',
            error: error.message
        });
    }
};

module.exports = {
    applyForJob,
    acceptApplication,
    rejectApplication,
    getApplicationDetailsById,
    getApplicationByJobId,
    getAllApplications
};

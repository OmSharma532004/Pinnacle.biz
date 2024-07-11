const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobsController');

// Route to register a new job
router.post('/register', jobsController.registerJob);

// Route to get all jobs sorted by the date posted
router.get('/all', jobsController.getAllJobs);

router.get('/:id', jobsController.getJobById);

router.put('/update/:id', jobsController.updateJob);

// Route to delete a job by ID
router.delete('/delete/:id', jobsController.deleteJob);

module.exports = router;

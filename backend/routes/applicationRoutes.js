const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationsController');

// Route to apply for a job
router.post('/apply', applicationController.applyForJob);

// Route to accept an application
router.put('/accept/:id', applicationController.acceptApplication);

// Route to reject an application
router.put('/reject/:id', applicationController.rejectApplication);

//get details by Id
router.get('/detail/:id', applicationController.getApplicationDetailsById);

//get applications by job Id
router.get('/job/:id', applicationController.getApplicationByJobId);

router.get('/getall', applicationController.getAllApplications);

module.exports = router;

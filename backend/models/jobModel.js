//create a job model with the following fields: title, experience, location, posted, icon, details,skills an array

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    posted: {
        type: Date,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Application'
    }],
    removed: {
        type: Boolean,
        default: false
    }



});

module.exports = mongoose.model('Job', jobSchema);
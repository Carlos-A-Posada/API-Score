const mongoose = require('mongoose');

const PlateScoreDB = mongoose.model(
    'PlateScore', 
    {
        plate: {
            type: Object,
            required: true
        },
        user: {
            type: Object,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);
    
module.exports = PlateScoreDB;
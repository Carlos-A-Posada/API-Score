const plateScore = require('../services/plate-score-service');
const aqp = require('api-query-params');

module.exports = {

    createPlateScore: async (req, res,next) => {
        try {
            const data = req.body;;
            const response = await plateScore.createPlateScore(data);
            res.status(201).json(response);
        } catch (error) {
            next(error);
        }
    },

    getPlateScoreByQuery: async (req, res,next) => {
        try {
            const query = aqp(req.query.query);
            const response = await plateScore.getPlateScoreByQuery(query);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },

    updatePlateScore: async (req, res,next) => {
        try {
            const id = req.query.id;
            const data = req.body
            const response = await plateScore.updatePlateScore(id, data);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    
    },

    deletePlateScore: async (req, res, next) => {
        try{
            const id = req.query.id;
            const response = await plateScore.deletePlateScore(id);
            res.status(200).json(response);
        } catch(error){
            next(error);
        }
    }
}


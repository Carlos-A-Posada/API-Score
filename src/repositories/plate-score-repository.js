const {PlateScoreDB} = require('../models/plate-score-model');

const ObjectID = require('mongodb').ObjectID;

const createPlateScore = async (dataScore) => {
    const plateScoreDB = new PlateScoreDB(dataScore);
    const idScore = ObjectID(plateScoreDB._id).toString();
    plateScoreDB._id = idScore;
    return await plateScoreDB.save();
}

const findScoreByQuery = async (query) => {
    const { filter, skip, limit, sort, projection, populate } = query;
    const options = { skip, limit, sort, populate };
    return PlateScoreDB.find(filter, projection, options);
}

const updatePlateScore = async (id, dataScore) => {
    return await PlateScoreDB.findByIdAndUpdate(id,dataScore,{new:true});
}

const deletePlateScore = async (id) => {
    return await PlateScoreDB.findByIdAndDelete(id);
}

const getImagesByQuery = async (query) => {
    try {
      let url = new URL(`${process.env.URL_IMAGES}/images`);
      url.search = new URLSearchParams({ query }).toString();
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return response.json();
    } catch (error) {
      const { statusCode, message } = error;
      console.log(statusCode, message);
      return error;
    }
  }

module.exports = {
    createPlateScore,
    findScoreByQuery,
    updatePlateScore,
    deletePlateScore,
    getImagesByQuery
}

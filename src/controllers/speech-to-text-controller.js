const speechToText = require("../services/speech-to-text-service");
const aqp = require("api-query-params");

module.exports = {
  createSpeechToText: async (req, res, next) => {
    try {
      const audio = req.files[0];
      const response = await speechToText.createSpeechToText(audio);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
};

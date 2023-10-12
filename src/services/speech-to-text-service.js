const fs = require("fs");
const path = require("path");

const { transcribe } = require("../repositories/whisper-repository");


const createSpeechToText = async (audio) => {
  const filePath = path.join(__dirname, "../public/lunch_test.mp4");
  const file = fs.createReadStream(filePath);
  const transcript = await transcribe(file);
  return transcript;
} 
  
module.exports = { createSpeechToText };


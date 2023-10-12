const axios = require("axios");

const transcribe = async (file) => {
  const response = await axios.post(
    "https://api.openai.com/v1/audio/transcriptions",
    {
      file,
      model: "whisper-1",
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  return response.data.text;
};

module.exports = { transcribe };


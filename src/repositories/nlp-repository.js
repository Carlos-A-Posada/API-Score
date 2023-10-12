const fetch = require("node-fetch");

const textDetection = async (body) => {
  try {
    let url = new URL(`${process.env.ALL_URLS}/nlp-food/food_text_classification`);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return { response, url: url };
  } catch (error) {
    const { statusCode, message } = error;
    console.log(statusCode, message);
    return error;
  }
};

module.exports = {
  textDetection
};

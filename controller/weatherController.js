const needle = require("needle");
const url = require("url");

//ENV Variable
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

const getApi = async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });
    //console.log(params);
    const apiRes = await needle("get", `${API_BASE_URL}?${params}`);
    const data = apiRes.body;
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { getApi };

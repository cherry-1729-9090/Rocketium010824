const axios = require('axios');
const Data = require('../models/dataModel');

const fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
    const data = response.data;

    await Data.deleteMany({});

    await Data.insertMany(data);

    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching and storing data:', error);
    throw error;
  }
};

module.exports = { fetchAndStoreData };
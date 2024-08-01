require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const dataFetcher = require('./src/utils/fetchData');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

dataFetcher.fetchAndStoreData()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to fetch and store initial data', err);
    process.exit(1);
  });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dataRoutes = require('./src/Routes/routes');
const dataFetcher = require('./src/utils/fetchData');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', dataRoutes);

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
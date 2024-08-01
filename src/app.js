const express = require('express');
const dataRoutes = require('./Routes/routes');

const app = express();

app.use(express.json());
app.use('/api', dataRoutes);

module.exports = app;
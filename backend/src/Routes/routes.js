const express = require('express');
const router = express.Router();
const dataController = require('../Controller/controller');

router.get('/data', dataController.getData);

module.exports = router;
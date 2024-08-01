const Data = require('../models/dataModel');

exports.getData = async (req, res) => {
  try {
    let query = Data.find();

    if (req.query.language) {
      query = query.where('language').equals(req.query.language);
    }
    if (req.query.version) {
      query = query.where('version').equals(parseFloat(req.query.version));
    }
    if (req.query.bio) {
      query = query.where('bio').regex(new RegExp(req.query.bio, 'i'));
    }

    if (req.query.sort) {
      const sortField = req.query.sort.startsWith('-') ? req.query.sort.substring(1) : req.query.sort;
      const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;
      query = query.sort({ [sortField]: sortOrder });
    }

    const data = await query.exec();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
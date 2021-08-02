const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const Report = require('../models/report');

// @route POST /
// @des  creates a new role
// @acess Public
router.get('/', (req, res) => {
  res.json({ hey: 'working' });
});

// @route POST /
// @des  creates a report
// @acess Public
router.post('/', (req, res) => {
  console.log('post workig');
});

module.exports = router;

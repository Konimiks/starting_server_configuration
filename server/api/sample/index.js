'use strict';

let express = require('express');
let controller = require('./sample.controller.js');
let router = express.Router();

router.get('/sampleURL', controller.sampleFunction);

module.exports = router;
'use strict';
var router = require('express').Router();

var tdModels = require('../models/tdModels.js');

router.get('/',tdModels.index);
router.get('/todos',tdModels.ask);
router.post('/todos',tdModels.add);

module.exports = router;

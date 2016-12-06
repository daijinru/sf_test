'use strict';
var router = require('express').Router();

var tdModels = require('../models/tdModels.js');
var loginModels = require('../models/loginModels.js');

router.get('/',loginModels.index);
router.post('/login',loginModels.login);
router.get('/todos',tdModels.ask);
router.post('/todos',tdModels.add);

module.exports = router;

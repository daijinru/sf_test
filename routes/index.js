'use strict';
var router = require('express').Router();

var tdModels = require('../models/tdModels.js');
var loginModels = require('../models/loginModels.js');
var signupModels = require('../models/signupModels.js');

router.get('/',loginModels.index);
router.get('/signup',signupModels.index);
router.get('/todos',tdModels.verify);
router.get('/askTodo',tdModels.ask);

router.post('/login',loginModels.login);
router.post('/signup',signupModels.signup);
router.post('/addTodo',tdModels.add);

module.exports = router;

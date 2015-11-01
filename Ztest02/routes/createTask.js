var express = require('express');
var router = express.Router();

var task = require('../controllers/task-controller');

/* GET home page. */
router.post('/', task.create);

module.exports = router;

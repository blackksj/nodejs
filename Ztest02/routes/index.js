var express = require('express');
var router = express.Router();

var task = require('../controllers/task-controller');

/* GET home page. */
router.get('/', task.list);

module.exports = router;

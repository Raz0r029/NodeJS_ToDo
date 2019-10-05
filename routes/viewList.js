const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskLists');

router.get('/', taskController.getList);

module.exports = router;
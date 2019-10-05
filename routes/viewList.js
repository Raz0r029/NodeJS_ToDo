const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskLists');

router.get('/', taskController.getList);
router.post('/', taskController.postList);

module.exports = router;
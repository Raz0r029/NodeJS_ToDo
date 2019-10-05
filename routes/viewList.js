const express = require('express');
const router = express.Router();

const createController = require('../controller/List');

router.get('/', createController.getList);
router.post('/', createController.postList);

module.exports = router;
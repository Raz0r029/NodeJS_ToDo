const express = require('express');
const router = express.Router();

const listController = require('../controller/List');

router.get('/', listController.getAllList);
router.get('/:id/edit', listController.getEditList);
router.get('/list/:id/delete', listController.deleteList);

router.post('/', listController.postList);
//router.post('/:id', listController.postDeleteProduct);
module.exports = router;
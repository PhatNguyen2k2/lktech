const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.post('/create', NewController.create);
router.put('/:slug', NewController.edit);
router.delete('/:id', NewController.delete);
router.get('/:slug', NewController.detail);
router.get('/', NewController.show);

module.exports = router;

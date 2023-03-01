const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.post('/create', NewController.create);
router.get('/', NewController.show);

module.exports = router;

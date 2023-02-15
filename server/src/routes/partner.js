const express = require('express');
const router = express.Router();
const PartnerController = require('../app/controllers/partnerController');

router.post('/create', PartnerController.create);
router.get('/', PartnerController.show);

module.exports = router;

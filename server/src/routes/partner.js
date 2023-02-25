const express = require('express');
const router = express.Router();
const PartnerController = require('../app/controllers/partnerController');

router.post('/create', PartnerController.create);
router.put('/:slug', PartnerController.edit);
router.delete('/:id', PartnerController.delete);
router.get('/:slug', PartnerController.detail);
router.get('/', PartnerController.show);

module.exports = router;

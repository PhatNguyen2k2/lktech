const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/productController');

router.post('/create', ProductController.create);
router.put('/:slug', ProductController.edit);
router.delete('/:id', ProductController.delete);
router.get('/:slug', ProductController.detail);
router.get('/', ProductController.show);

module.exports = router;

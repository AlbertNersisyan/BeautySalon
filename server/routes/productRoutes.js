const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../config/multer');

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', protect, upload.array('images', 5), productController.createProduct);
router.put('/:id', protect, upload.array('images', 5), productController.updateProduct);
router.delete('/:id', protect, productController.deleteProduct);

module.exports = router;

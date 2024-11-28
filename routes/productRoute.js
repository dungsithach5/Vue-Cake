import express from 'express';
const router = express.Router();

import productController from '../controllers/productController.js';

router.route("/")
    .post(productController.createProduct)
    .get(productController.getProductById);

router.route("/:id")
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

export default router;

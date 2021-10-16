const express = require('express');
const productcategoriesController = require('../../controllers/productcategories.controller');

const router = express.Router();

router
  .route('/')
  .post(productcategoriesController.createProductcategories)
  .get(productcategoriesController.getProductcategoriess);

router
  .route('/:productcategoriesId')
  .get(productcategoriesController.getProductcategories)
  .patch(productcategoriesController.updateProductcategories)
  .delete(productcategoriesController.deleteProductcategories);

module.exports = router;


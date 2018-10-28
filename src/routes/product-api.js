'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import ProductService from "../services/product-service";
import ProductValidator from "../services/validator/product-validator";
import ProductFactory from "../services/util/product-factory";

const productRoute = express.Router();
const productService = new ProductService();
const validator = new ProductValidator();
const productDtoFactory = new ProductFactory();

productRoute.get('/', (req, res) => {
  let product = productService.getProducts();

  res.send(product)
});

productRoute.get('/:productId', (req, res) => {
  let product = productService.getProduct(req.params.productId);

  res.send(product);
});

productRoute.post('/', bodyParser.json(), (req, res, next) => {
  validator.validateFields(req, res, next);

  let productDto = productDtoFactory.newProduct(req);
  let product = productService.saveProduct(productDto);
  res.send(product);
});

productRoute.put('/:id', bodyParser.json(), (req, res, next) => {
  validator.validateId(req, res, next);
  validator.validateFields(req, res, next);

  let productDto = productDtoFactory.newProduct(req);
  let updatedProduct = productService.updateProduct(req.body.id, productDto);
  res.json(updatedProduct);
});

productRoute.delete('/:id', bodyParser.json(), (req, res, next) => {
  validator.validateId(req, res, next);

  let productId = req.body.id;
  productService.deleteProduct(productId);
  res.send(`Deleted product with ${productId}`)
});

export {productRoute}
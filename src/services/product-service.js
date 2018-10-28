'use strict';

import Product from "../domains/product";

export default class ProductService {

  saveProduct(product) {
    return product;
  }

  getProducts() {
    return new Product('id', 'name', 'opers');
  }

  getProduct(id) {
    return new Product(id, 'name', 'opers')
  }

  updateProduct(id, product) {
    return new Product(id, product.name, product.operations);
  }

  deleteProduct(id) {
    return;
  }
}
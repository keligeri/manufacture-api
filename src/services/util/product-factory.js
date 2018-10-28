import _ from 'underscore'
import Product from "../../domains/product";

export default class ProductFactory {

  newProduct(req) {
    let newProductDto = new Product('', '', '');
    _.extend(newProductDto, req.body);

    return newProductDto;
  }
}
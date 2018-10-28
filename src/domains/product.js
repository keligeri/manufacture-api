'use strict';

export default class Product {
  id;
  name;
  operations;

  constructor(id, name, operations) {
    this.id = id;
    this.name = name;
    this.operations = operations;
  }
}
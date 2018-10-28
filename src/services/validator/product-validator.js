export default class ProductValidator {

  requiredFields = ['id', 'name', 'operations'];

  validateFields(req, res, next) {
    for (let i = 0; i < this.requiredFields.length; i++) {
      let requiredField = this.requiredFields[i];
      if (req.body[requiredField]) {
        // TODO improve validation process
      }
    }

    next();
  };

  validateId(req, res, next) {
    let currentId = req.params.id;
    if (isNaN(currentId)) {
      throw Error(`Id (${currentId}) must be a valid number`);
    }

    next();
  };
}
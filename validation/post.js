const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  

  if(!Validator.isLength(data.text, { min: 10, max: 300})) {
      errors.text = 'Post must be between 10 and 300 characters';
      //We can change character max length above ^
  }
  

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
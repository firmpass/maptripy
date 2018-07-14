const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateGroupInput(data) {
  let errors = {};

  data.groupName = !isEmpty(data.groupName) ? data.groupName : "";
  data.destination = !isEmpty(data.destination) ? data.destination : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.to = !isEmpty(data.to) ? data.to : "";

  if (!Validator.isLength(data.groupName, { min: 4, max: 20 })) {
    errors.text = "Post must be between 4 and 20 characters";
    //We can change character max length above ^
  }

  if (Validator.isEmpty(data.groupName)) {
    errors.text = "Group name is required";
  }

  if (Validator.isEmpty(data.destination)) {
    errors.text = "Destination is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.text = "From date is required";
  }

  if (Validator.isEmpty(data.to)) {
    errors.text = "To date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

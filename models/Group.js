const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema - what each Post will have.
const GroupSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  groupName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  //add travel dates
});

module.exports = Group = mongoose.model("groups", GroupSchema);

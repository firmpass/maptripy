const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema - what each Post will have.
const GroupSchema = new Schema({
  groupName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  users: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Group = mongoose.model("groups", GroupSchema);

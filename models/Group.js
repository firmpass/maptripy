const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema - what each Post will have.
const GroupSchema = new Schema({
  admin: {
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
  from: {
    type: Date,
    required: true
  },
  to: {
    type: String,
    required: true
  },
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
  ],
  members: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = Group = mongoose.model("groups", GroupSchema);

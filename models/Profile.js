const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  visited: [
    {
      location: {
        type: String
      },
      from: {
        type: Date
      },
      to: {
        type: Date
      },
      synopsis: {
        type: String
      }
    }
  ],
  bucketlist: [
    {
      location: {
        type: String
      },
      time: {
        type: Date
      },
      synopsis: {
        type: String
      }
    }
  ],
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);

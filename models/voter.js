const mongoose = require("mongoose");

const VoterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    father_name: {
      type: String,
    },
    cnic: {
      type: Number,
      unique: true,
    },
    age: {
      type: Number,
    },
    is_alive: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("voters", VoterSchema);

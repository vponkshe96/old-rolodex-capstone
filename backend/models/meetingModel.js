const mongoose = require("mongoose");

//schema defines how documents within a collection should look like
const { Schema } = mongoose;

const meetingSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//creating a meetings collection (db) on mongodb atlas and a meeting model - interface for performing operations on db
module.exports = mongoose.model("meeting", meetingSchema);

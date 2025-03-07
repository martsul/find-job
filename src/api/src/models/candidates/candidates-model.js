const { Schema, model } = require("mongoose");

const CandidatesSchema = new Schema({
  img: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: String,
    required: true,
  },
  workTime: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  descriptors: [
    {
      type: String,
      trim: true,
    },
  ],
  filtersInfo: [
    {
      type: String,
      trim: true,
    },
  ],
});

module.exports = model("Candidates", CandidatesSchema);

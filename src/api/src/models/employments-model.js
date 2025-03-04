const { Schema, model, Types } = require("mongoose");

const EmploymentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: Types.ObjectId,
  },
  logo: {
    type: String,
    required: true,
  },
  filtersInfo: {
    type: [String],
    required: true,
  },
  descriptors: {
    type: [String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  workTime: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = model("Employment", EmploymentSchema);

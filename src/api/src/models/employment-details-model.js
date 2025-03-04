const { Schema, model, Types } = require("mongoose");

const EmployersDetailsSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      default: Types.ObjectId,
    },
    timeOfPost: {
      type: Date,
      default: Date.now,
    },
    mainInfo: {
      experience: {
        type: String,
        required: true,
      },
      workLevel: {
        type: String,
        required: true,
      },
      employeeType: {
        type: String,
        required: true,
      },
      offerSalary: {
        type: [String],
        required: true,
      },
    },
    company: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    collection: "employersDetails",
  }
);

module.exports = model("EmployerDetails", EmployersDetailsSchema);

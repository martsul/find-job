const employmentsModel = require("../models/employments-model");
const employersDetailsModel = require("../models/employment-details-model");

class EmploymentsControllers {
  async getEmploymentDetails(req, res, next) {
    try {
      const employmentId = req.params.id;

      const employersDetails = await employersDetailsModel.findOne({
        _id: employmentId,
      });

      res.send(employersDetails);
    } catch (error) {
      console.log(error);
    }
  }
  async getAllEmployments(req, res, next) {
    try {
      const employments = await employmentsModel.find();

      res.send(employments);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new EmploymentsControllers();

const candidatesModel = require("../models/candidates/candidates-model");

class CandidatesControllers {
  // async getCandidateDetails(req, res, next) {
  //   try {
  //     const employmentId = req.params.id;

  //     const employersDetails = await employersDetailsModel.findOne({
  //       _id: employmentId,
  //     });

  //     res.send(employersDetails);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async getAllCandidates(req, res, next) {
    try {
      const candidates = await candidatesModel.find();

      res.send(candidates);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CandidatesControllers();

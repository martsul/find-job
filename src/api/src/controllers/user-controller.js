const { sendActivationMail } = require("../service/mail-service");
const userService = require("../service/user-service");

class UserControllers {
  async registration(req, res, next) {
    try {
      const { email, password, nickname } = req.body;
      const userData = await userService.registration(
        email,
        password,
        nickname
      );

      // res.cookie("refreshToken", userData.refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      //   httpOnly: true,
      // });
      return res.json(userData);
    } catch (error) {
      console.log(error);
    }
  }
  async activate(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async login(req, res, next) {
    try {
      await sendActivationMail("aliaksandrm9321@gmail.com", "123123123")
      res.send(123123123213)
    } catch (error) {
      console.log(error);
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async getUsers(req, res, next) {
    try {
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new UserControllers();

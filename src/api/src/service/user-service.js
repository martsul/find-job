const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
  async registration(email, password, nickname) {
    // const candidate = await UserModel.findOne({ email });

    // if (candidate) {
      // throw new Error("Пользователь с таким адресом уже существует");
    // }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    // const user = await UserModel.create({
      // email,
      // password: hashPassword, 
      // nickname,
    // });
    console.log("start")
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate${activationLink}`);
    console.log("end")

    // const userDto = new UserDto(user);
    // const tokens = tokenService.generateTokens({ ...userDto });
    // await tokenService.saveToken(userDto.id, tokens.refreshToken);

    // return {
    //   ...tokens,
    //   user: userDto,
    // };
  }
}

module.exports = new UserService();

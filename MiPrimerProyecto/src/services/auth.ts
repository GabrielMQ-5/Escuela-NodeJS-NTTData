import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { decrypt, encrypt } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) {
    return "ALREADY_USER";
  }

  const passHash = await encrypt(password);

  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) {
    return "NOT_FOUND_USER";
  }

  const passHash = checkIs.password;
  const isCorrect = await decrypt(password, passHash);

  if (!isCorrect) {
    return "INCORRECT_PASSWORD";
  }

  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };

  return data;
};

export { registerUser, loginUser };

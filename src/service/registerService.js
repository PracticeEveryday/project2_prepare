import { userModel } from "../db/index";

class registerService {
  static addUser = async ({ email, password, name, info }) => {
    console.log(email, password, name, info);
    const newUser = await userModel.addUser({ email, password, name, info });
    return newUser;
  };
}

export { registerService };

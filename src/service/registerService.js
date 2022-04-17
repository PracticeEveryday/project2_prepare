import { userModel } from "../db/index";

import { hashPassword } from "../utils/hashPassword";

class registerService {
  static addUser = async ({ email, password, name, info }) => {
    const hashedPassword = hashPassword(password);
    const newUserData = { email, password: hashedPassword, name, info };

    const newUser = await userModel.addUser(newUserData);
    return newUser;
  };
}

export { registerService };

import { userModel } from "../db/index";

import { hashPassword } from "../utils/hashPassword";

import { v4 as uuidv4 } from "uuid";

class registerService {
  static addUser = async ({ email, password, name, info }) => {
    const userId = uuidv4();
    const user = await userModel.findByEmail(email);
    if (user) {
      const errorMessage = "중복된 email입니다 다시 한 번 확인해 주세요";
      return { errorMessage };
    }
    const hashedPassword = hashPassword(password);
    const newUserData = { userId, email, password: hashedPassword, name, info };

    const newUser = await userModel.addUser(newUserData);
    return newUser;
  };
}

export { registerService };

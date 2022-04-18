import { userModel } from "../db";

import { hashPassword } from "../utils/hashPassword";
import { makeToken, makeRefreshToken } from "../utils/makeToken";
class loginService {
  static findUser = async ({ email, password }) => {
    const findUser = await userModel.findByEmail(email);
    const hashedPassword = hashPassword(password);

    if (!findUser) {
      const errorMessage = "해당 email로 가입된 아이디가 없습니다.";

      return { errorMessage };
    } else if (findUser.password === hashedPassword) {
      const userId = findUser.userId;
      const ObjectId = String(findUser._id);
      const token = makeToken({ userId, ObjectId });
      const refreshToken = makeRefreshToken();
      const user = {
        findUser,
        token,
        refreshToken,
      };
      return user;
    } else {
      const errorMessage = "비밀번호가 다릅니다 다시 한 번 확인해 주세요";

      return { errorMessage };
    }
  };
}

export { loginService };

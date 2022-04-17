import { userModel } from "../db";
import { hashPassword } from "../utils/hashPassword";
class loginService {
  static findUser = async ({ email, password }) => {
    const findUser = await userModel.findByEmail(email);
    const hashedPassword = hashPassword(password);
    if (!findUser) {
      const errorMessage = "해당 email로 가입된 아이디가 없습니다.";
      return { errorMessage };
    } else if (findUser.password === hashedPassword) {
      return findUser;
    } else {
      const errorMessage = "비밀번호가 다릅니다 다시 한 번 확인해 주세요";
      return { errorMessage };
    }
  };
}

export { loginService };

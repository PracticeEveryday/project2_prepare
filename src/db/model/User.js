import { User } from "../schema/user";

class userModel {
  static addUser = async ({ email, password, name, info }) => {
    const newUserData = { email, password, name, info };
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { userModel };

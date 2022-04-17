import { User } from "../schema/user";

class userModel {
  static addUser = async (newUserData) => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { userModel };

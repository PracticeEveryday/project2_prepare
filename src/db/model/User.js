import { User } from "../schema/user";

class userModel {
  static findByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
  };
  static addUser = async (newUserData) => {
    const newUser = await User.create(newUserData);
    return newUser;
  };
}

export { userModel };

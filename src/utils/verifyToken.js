import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtkey = process.env.JWT_KEY;
const accessVerify = (token) => {
  try {
    const atokenVerify = jwt.verify(token, jwtkey);
    return {
      status: "succ",
      userId: atokenVerify.userId,
      ObjectId: atokenVerify.ObjectId,
    };
  } catch (error) {
    return {
      status: "fail",
      message: error.message,
    };
  }
};

const refreshTokenVerify = async (refreshToken) => {
  try {
    const verifyRefreshToken = await accessVerify(refreshToken, jwtkey);
    if (verifyRefreshToken) {
      try {
        return true;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export { accessVerify, refreshTokenVerify };

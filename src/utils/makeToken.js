import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const jwtkey = process.env.JWT_KEY;

const makeToken = (object) => {
  const token = jwt.sign(object, jwtkey, {
    expiresIn: "24h",
  });
  return token;
};

export { makeToken };

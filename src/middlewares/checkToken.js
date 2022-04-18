import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const checkToken = (req, res, next) => {
  if (req.headers["authorization"]) {
    const jwtkey = process.env.JWT_KEY;
    const token = req.headers["authorization"].split(" ")[1];
    const Object = jwt.verify(token, jwtkey);

    if (Object.status) {
      req.user = Object;
      next();
    } else {
      res.status(401).json({
        status: "fail",
        message: Object.message,
      });
    }
  } else {
    console.log(1);
    res.status(401).json({
      status: "fali",
      message: "토큰이 존재하지 않습니다.",
    });
  }
};

export { checkToken };

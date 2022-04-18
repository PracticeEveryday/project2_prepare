import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken";
const detailedLoginRouter = Router();

detailedLoginRouter.post("/verify", verifyToken, async (req, res, next) => {
  console.log(req.user);
  res.status(200).json({
    status: "succ",
    message: "token exist",
  });
});

export { detailedLoginRouter };

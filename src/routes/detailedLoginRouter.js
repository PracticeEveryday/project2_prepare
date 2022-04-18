import { Router } from "express";
import { checkToken } from "../middlewares/checkToken";
const detailedLoginRouter = Router();

detailedLoginRouter.post("/verify", checkToken, async (req, res, next) => {
  console.log(req.user);
  res.status(200).json({
    status: "succ",
    message: "token exist",
  });
});

export { detailedLoginRouter };

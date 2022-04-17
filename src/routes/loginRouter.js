import { Router } from "express";
import { loginService } from "../service/loginService";

const loginRouter = Router();

loginRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await loginService.findUser({ email, password });
    if (findUser.errorMessage) {
      throw new Error(findUser.errorMessage);
    }
    res.status(200).json({
      status: "succ",
    });
  } catch (error) {
    next(error);
  }
});

export { loginRouter };

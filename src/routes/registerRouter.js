import { Router } from "express";
import { registerService } from "../service/registerService";
const registerRouter = Router();

registerRouter.post("/register", async (req, res, next) => {
  try {
    const { email, password, name, info } = req.body;
    console.log(email, password, name, info);
    const newUser = await registerService.addUser({
      email,
      password,
      name,
      info,
    });
    res.status(200).json({
      status: "succ",
    });
  } catch (error) {
    next(error);
  }
});

export { registerRouter };

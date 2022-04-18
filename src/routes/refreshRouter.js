import { Router } from "express";
import { makeToken } from "../utils/makeToken";
import { accessVerify, refreshTokenVerify } from "../utils/verifyToken";

import dotenv from "dotenv";
dotenv.config();

const refreshRouter = Router();

refreshRouter.post("/refresh", async (req, res, next) => {
  const accessToken = req.body.token;
  const refreshToken = req.body.refreshToken;

  const verifiddAccessToken = await accessVerify(accessToken);
  const verifiedRefreshToken = await refreshTokenVerify(refreshToken);
  console.log(verifiddAccessToken);
  console.log(verifiedRefreshToken);
  res.status(200).json({ verifiddAccessToken, verifiedRefreshToken });
});

export { refreshRouter };

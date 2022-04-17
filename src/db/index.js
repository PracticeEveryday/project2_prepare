import mongoose from "mongoose";
import dotenv from "dotenv";

import { userModel } from "./model/User";
dotenv.config();

const Mongo_URL = process.env.Mongo_URL || "URL이 틀립니다 ㅠ";
mongoose
  .connect(Mongo_URL)
  .then(() => console.log(`${Mongo_URL}에 연결되었습니다.`))
  .catch(() => console.log(`${Mongo_URL}`));

export { userModel };

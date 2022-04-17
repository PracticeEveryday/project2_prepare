import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    default: "정보를 입력하지 않았습니다.",
  },
});

const User = mongoose.model("User", userSchema);

export { User };

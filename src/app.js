import express from "express";
import { indexRouter } from "./routes/indexRouter";
import { registerRouter } from "./routes/registerRouter";
import { loginRouter } from "./routes/loginRouter";
import { detailedLoginRouter } from "./routes/detailedLoginRouter";
import { refreshRouter } from "./routes/refreshRouter";

const app = express();

// POST 요청 시 Body 사용을 위한 기본코드
// 폼형식을 허용해라
app.use(express.urlencoded({ extended: true }));
// json을 허용해라
app.use(express.json());

app.use(indexRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(detailedLoginRouter);
app.use(refreshRouter);
export { app };

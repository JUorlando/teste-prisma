import express from "express";
import { globalErrors } from "./errors";
import userRouter from "./routes/user.routes";
import documentRouter from "./routes/document.routes";
import authRouter from "./routes/auth.routes";

const app = express();

app.use(express.json());

//ROTAS
app.use("/api", userRouter);
app.use("/api", authRouter);
app.use("/api", documentRouter);

//ERROS
app.use(globalErrors);

export default app;

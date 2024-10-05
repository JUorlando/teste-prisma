import express from "express";
import { globalErrors } from "./errors";
import userRouter from "./routes/user.routes";
import documentRouter from "./routes/document.routes";
import authRouter from "./routes/auth.routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());

app.use(cors());

//ROTAS
app.use("/api", userRouter);
app.use("/api", authRouter);
app.use("/api", documentRouter);

// ROTA DE DOCUMENTAÇÃO
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

//ERROS
app.use(globalErrors);

export default app;

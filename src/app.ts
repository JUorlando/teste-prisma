import express from 'express';
import { globalErrors } from './errors';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());

//ROTAS PÚBLICAS
app.use("/api", userRouter)

//ERROS
app.use(globalErrors)

export default app;
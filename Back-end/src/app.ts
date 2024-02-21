import "express-async-errors";
import express from "express";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { routes } from "./routes";
import { clientsRouter } from "./routes/clients.routes";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use(handleErrors);


export default app;
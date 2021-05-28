import dotenv from 'dotenv';
dotenv.config();

import { errors } from "celebrate";
import express, { json } from "express";
import { errorHandler } from "./middleware/ErrorHandler";
import routes from "./routes";


const app = express();

app.use(json());

app.use('/v1/api/risks/tests', routes);

app.use(errors());
app.use(errorHandler);

app.listen(process.env.PORT || 8887);

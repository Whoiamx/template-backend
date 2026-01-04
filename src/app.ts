import express from "express";
import cors from "cors";
import { config } from "./config";

import { userRouter } from "./routes/user.routes";

const app = express();

// Middlewares
app.use(
  cors({
    origin: config.cors.origin,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger (only in development)

// Routes

app.use("/api/users", userRouter);

export { app };

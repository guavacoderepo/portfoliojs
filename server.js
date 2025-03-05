import express from "express";
import dotenv from "dotenv";
import { databaseconnect } from "./config/db.config.js";
import { errorResponse } from "./middlewares/response.js";
import index from "./routers/index.js";

// dotenv.config({ path: "./config/config.env" });
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1", index());
app.use(errorResponse);

const port = parseInt(process.env.PORT) ?? 5390;

app.listen(port, async () => {
  console.log(`server started on port ${port}`);
});

databaseconnect();

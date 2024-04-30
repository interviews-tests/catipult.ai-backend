import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import goalRoutes from "./routes/goalRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

app.use(bodyParser.json());
app.use(cors());
app.get("/api", (req, res) => {
  res.send("GOALS API V1");
});
app.use("/api/goals", goalRoutes);
app.use(errorHandler);

export default app;

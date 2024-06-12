import express from "express";
const app = express();
import cors from "cors";

// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from achieve flow server");
});

export default app;

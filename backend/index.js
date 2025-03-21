import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

app.use((err) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server running at PORT ${process.env.SERVER_PORT}`);
});

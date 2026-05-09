const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const connectDB = require("./config/db");

connectDB();

const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

require("dotenv").config();

app.use(errorHandler);


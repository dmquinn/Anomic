const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const artistRoutes = require("./routes/artistRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const uploadRoutes = require("./routes/uploadRoutes");
const morgan = require("morgan");

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/artists", artistRoutes);

app.use("/api/upload", uploadRoutes);

const folder = path.resolve();
app.use("/uploads", express.static(path.join(folder, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
app.get("/api/artists", (req, res) => {
  res.json(res);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

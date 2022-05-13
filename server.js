const express = require("express");
const carRoutes = require("./src/routes/cars");
const connectDB = require("./src/config/db");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// db config
connectDB();

// routes
app.use("/api/cars/", carRoutes);

// error handler
app.use((req, res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
      error: {
      message: error.message,
      },
   });
});

// port config
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
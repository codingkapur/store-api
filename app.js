require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
//Database
const connectDB = require("./db/connect");
//Router
const productsRouter = require("./routes/products");
//Custom Error Messages
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//Middleware
app.use(express.json());

//generic Route
app.get("/", (req, res) => {
  console.log(req.method);
  res.status(200).send("We in the store bitches!");
});

//Path for router
app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

//Start function for server
const port = 5000;
const start = async () => {
  try {
    //Connect to the DB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening on port " + port));
  } catch (error) {
    console.log(error);
  }
};

start();

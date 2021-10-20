require("dotenv").config();
const express = require("express");
const app = express();

const connectDB = require('./db/connect');


const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.method);
  res.status(200).send("We in the store bitches!");
});

// app.use('/api/v1/products');


app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = 5000;
const start = async () => {
    try {
        //Connect to the DB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('Server is listening on port ' + port))
    } catch (error) {
        console.log(error)
    }
}
app.listen(port, () => {
  console.log(`You are listening on port ${port}`);
});

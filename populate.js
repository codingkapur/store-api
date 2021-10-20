require('dotenv').config()

//Database
const connectDB = require('./db/connect');
//Schema
const Product = require('./models/product');
//data
const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('Success');
    } catch (error) {
        console.log(error);
    }
}

start();
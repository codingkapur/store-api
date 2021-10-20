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
        //Set up a process.exit to automatically exit once the database has been populated and this function has served its purpose.
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start();
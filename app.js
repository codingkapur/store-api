require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    console.log(req.method);
    res.status(200).send('We in the store bitches!')
})

const port = 5000;
app.listen(port, ()=> {
    console.log(`You are listening on port ${port}`)
})
const bodyParser = require("body-parser");
const express = require('express');
const dbConnect = require('./config/dbconnect');
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require('dotenv').config();
const  PORT = process.env.PORT  || 4000;
const authRouter =  require('./routes/authRoute');
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', authRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Server is running on PORT ${PORT}`); 
});
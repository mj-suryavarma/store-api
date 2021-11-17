require('dotenv').config();
require('express-async-errors');  // this is used for error handling instead of async wrapper(try catch) 
                 // npm install exprees-async-errors --save
const express = require('express');
const app = express();

// connect db
const connectDB = require('./db/connect');
// router
const productRouters = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorHanlderMiddleware = require('./middleware/error-handler');

// middleware

app.use(express.json());

// routes
app.get('/', (req,res) => {
    res.send("<h1> Store Api </h1><a href='api/v1/products'>products route</a>")
})


// product route
app.use('/api/v1/products',productRouters);



app.use(notFoundMiddleware);
app.use(errorHanlderMiddleware);

const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`server listening the port no ${port}`);
        })
    } catch (error) {
        console.log(error);

    }
}

start();

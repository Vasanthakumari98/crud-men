const mongoose = require('mongoose');
const express = require('express');
const Product = require('./models/product.model.js');
const productRoute=require("./routes/product.route.js")

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://admin123:admin123@backend.eponb.mongodb.net/node-API?retryWrites=true&w=majority&appName=backend';

app.get("/",(req,res)=>{
    res.send("hello from node api server update")
});
// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to database');
        // Start the server only after successful database connection
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Failed to connect to the database:', error);
    });

require('dotenv').config();

console.log("index.js is running");
const express=require('express');
const cookieParser=require('cookie-parser');
const db=require('./config/db');


const app=express();

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Capzone server is running!');
});

const userRoutes=require("./routes/users")
app.use("/api/users",userRoutes);

const cartRoutes=require("./routes/cart");
app.use("/api/cart",cartRoutes);

const productRoutes=require("./routes/products");
app.use("/api/products",productRoutes);

const wishlistRoutes=require("./routes/wishlist");
app.use("/api/wishlist",wishlistRoutes);


const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});








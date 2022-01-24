const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

require("dotenv").config();
//connect with database
connectDB();
//route
//middleware for the read format
app.use(express.json());
//middleware for the contact routes
app.use("/api/person", require("./router/person"));

// connect with PORT
const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server is runing on", PORT));

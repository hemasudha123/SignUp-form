const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./.env" });

const app = express();
app.use(cookieParser());
app.use(cors({ origin: "*" }));

require("./db/conn");
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT || 3001;

//// I just comment out the below about section
// app.get('/about', (req, res) => {
//     console.log(`Hello my About`);
//     res.send(`Hello About world from the server`);
// });

// app.get('/contact', (req, res) => {
//     // res.cookie("Test", 'thapa');
//     res.send(`Hello Contact world from the server`);

// });

// app.get('/signing', (req, res) => {
//     res.send(`Hello Login world from the server`);
// });

app.get("/signup", (req, res) => {
  res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});

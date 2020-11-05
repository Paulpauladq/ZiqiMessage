const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();

mongoose.connect("mongodb+srv://paultzq:" + process.env.MONGO_ATLAS_PW + "@ziqicluster.buubi.mongodb.net/node-angular")
  .then(() => {
    console.log('Connected to datbase!');
  })
  .catch(() => {
    console.log('Connected failed!');
  }) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "myforum")));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
})

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "myforum", "index.html"));
});

module.exports = app;




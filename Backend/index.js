const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PostRoutes = require("./routes/PostRoutes.js");
require("dotenv").config();

//const PORT = 50001;

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//declaring routers
app.use("/posts", PostRoutes);

//connecting to mongoDb
const connectionUrl =
  "mongodb+srv://projectdubhi:projectdubhi@mernstackapp.ukxhv.mongodb.net/reactBlogApp?retryWrites=true&w=majority"
mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 50001, () => {
      console.log("Server running on port ");
    });
  })
  .catch((e) => {
    console.log("error", e.message);
  });

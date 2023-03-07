//Import packages
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
//Instantiate express, initialize variables and import routers
const app = express();
const PORT = process.env.PORT || 4040;
const meetingRoutes = require("./routes/meetingRoutes");

//connect to db and then start listening for requests
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () =>
      console.log(`connected to db and server running at PORT ${PORT}`)
    );
  })
  .catch((err) => console.log(err));

//to link to frontend
app.use(cors());
//middleware to serve up static views/files saved in uploads directory
//telling express to look inside uploads folder to serve images
app.use(express.static(path.join(__dirname, "uploads")));
//To parse/process JSON data sent by client during POST/PUT request
app.use(express.json());
//when a request is fired to the below end point use meeting Routes
app.use("/api/meetings", meetingRoutes);

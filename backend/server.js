//Import packages
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

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
//provides a JSON parser used to process data sent by client
//ie.JSON data in req body during POST/PUT request
app.use(express.json());
//when a request is fired to the below end point use meeting Routes
app.use("/api/meetings", meetingRoutes);

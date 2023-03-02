//ERROR validation for create function as mongoose calls toString function
//https://mongoosejs.com/docs/schematypes.html#strings

//Meeting Model, needs to be capital or else it'll cause problems
const Meeting = require("../models/meetingModel");
const mongoose = require("mongoose");

//@desc Get all meetings
//@route GET /api/meetings
//@access public
const getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find({}).sort({ createdAt: -1 });
  res.status(200).json(meetings);
};

//@desc Create a new meeting
//@route POST /api/meetings
//@access public
//201 status code for creating a new resource
const createMeeting = async (req, res) => {
  console.log("inside here");
  const { name, age, country } = req.body;
  try {
    const meeting = await Meeting.create({
      name,
      age,
      country,
    });
    res.status(201).json(meeting);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//@desc Get a meeting
//@route GET /api/meetings/:id
//@access public
const getMeeting = async (req, res) => {
  const { id } = req.params;
  //check if valid id that follows proper format
  //without this mongoose will crash
  if (mongoose.Types.ObjectId.isValid(id)) {
    const meeting = await Meeting.findById(id);
    if (meeting) {
      res.status(200).json(meeting);
    } else {
      res.status(404).json({ err: "No such meeting exists!" });
    }
  } else {
    res
      .status(404)
      .json({ err: "No such meeting exists and the id format is wrong!" });
  }
};

//@desc Update a meeting
//@route GET /api/meetings/:id
//@access public
const updateMeeting = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const meeting = await Meeting.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (meeting) {
      res.status(200).json(meeting);
    } else {
      res.status(404).json({ err: "No such meeting exists!" });
    }
  } else {
    res
      .status(404)
      .json({ err: "No such meeting exists and the id format is wrong!" });
  }
};

//@desc Update a meeting
//@route GET /api/meetings/:id
//@access public
const deleteMeeting = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const meeting = await Meeting.findByIdAndDelete(id);
    if (meeting) {
      res.status(200).json(meeting);
    } else {
      res.status(404).json({ err: "No such meeting exists!" });
    }
  } else {
    res
      .status(404)
      .json({ err: "No such meeting exists and the id format is wrong!" });
  }
};

module.exports = {
  getAllMeetings,
  createMeeting,
  getMeeting,
  updateMeeting,
  deleteMeeting,
};

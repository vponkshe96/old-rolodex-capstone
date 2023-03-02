const express = require("express");
const router = express.Router();
const {
  getAllMeetings,
  createMeeting,
  getMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/MeetingController");

//Writing cleaner code by attaching multiple handlers to one endpoint
router.get("/", getAllMeetings).post("/", createMeeting);

router
  .get("/:id", getMeeting)
  .put("/:id", updateMeeting)
  .delete("/:id", deleteMeeting);

module.exports = router;

//Image form input
import "./newMeeting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const NewMeeting = () => {
  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meeting = { image, fullName, date, mode, notes, rating, status };
    console.log(meeting);
    //MUST specify headers since form data has image file
    //not including this was causing errors
    const response = await axios.post(
      "http://localhost:8080/api/meetings",
      meeting,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 201) {
      alert("New meeting has been successfully added!");
    }
    setImage("");
    setFullName("");
    setDate("");
    setMode("");
    setNotes("");
    setRating("");
    setStatus("");
  };

  return (
    <div className="newMeeting">
      <Sidebar />
      <div className="newMeetingContainer">
        <Navbar />
        <h1 className="newMeetingTitle">Add New Meeting</h1>
        <form className="newMeetingForm" onSubmit={handleSubmit}>
          <div className="left">
            {/* creates URL to image saved on local device */}
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <div className="item">
              {/* image updates whenever new image file is selected */}
              <input
                type="file"
                name="image"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="item">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                placeholder="John Smith"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="item">
              <label>Date</label>
              <input
                type="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="item">
              <label> Mode</label>
              <input
                type="text"
                value={mode}
                placeholder="Online or Offline"
                required
                onChange={(e) => setMode(e.target.value)}
              />
            </div>
            <div className="item">
              <label> Notes</label>
              <textarea
                name="meetingNotes"
                type="text"
                value={notes}
                placeholder="It was a good meeting where the following points were discussed: "
                rows="6"
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div className="item">
              <label>Rating</label>
              <select
                value={rating}
                required
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="default">Choose Here</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="item">
              <label>Status</label>
              <select
                value={status}
                required
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="default">Choose Here</option>
                <option>Active</option>
                <option>Maintain</option>
                <option>Ignore</option>
              </select>
            </div>
            <button>
              <Add className="icon" />
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewMeeting;

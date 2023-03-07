import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewMeeting from "./pages/newMeeting/NewMeeting.jsx";
import MeetingList from "./pages/meetingList/MeetingList.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newMeeting" element={<NewMeeting />} />
        <Route path="/meetingList" element={<MeetingList />} />
      </Routes>
    </div>
  );
};
export default App;

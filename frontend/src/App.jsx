import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewMeeting from "./pages/newMeeting/NewMeeting.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newMeeting" element={<NewMeeting />} />
      </Routes>
    </div>
  );
};
export default App;

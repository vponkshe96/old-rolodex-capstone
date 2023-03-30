import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./meetingList.scss";
const MeetingList = () => {
  return (
    <div className="meetingList">
      <Sidebar />
      <div className="meetingListContainer">
        <Navbar />
        <h1 className="title">Meeting Log</h1>
        <Datatable />
      </div>
    </div>
  );
};
export default MeetingList;

//May have to move title to Navbar
import "./sidebar.scss";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageIcon from "@mui/icons-material/Message";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="icon">
          <RecordVoiceOverIcon />
        </span>
        <span className="title">Rolodex</span>
      </div>
      <div className="rest">
        <div className="item">
          <p className="title">Dashboard</p>
          <ul>
            <li className="subitem">
              <DashboardIcon className="icon" />
              <span className="text">Home</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <p className="title">Meetings</p>
          <ul>
            <li className="subitem">
              <AddBoxIcon className="icon" />
              <span className="text">Create </span>
            </li>
            <li className="subitem">
              <VisibilityIcon className="icon" />
              <span className="text">View </span>
            </li>
          </ul>
        </div>
        <div className="item">
          <p className="title">User </p>
          <ul>
            <li className="subitem">
              <MessageIcon className="icon" />
              <span className="text">Message</span>
            </li>
            <li className="subitem">
              <TrendingUpIcon className="icon" />
              <span className="text">Analytics</span>
            </li>
            <li className="subitem">
              <LogoutIcon className="icon" />
              <span className="text">Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

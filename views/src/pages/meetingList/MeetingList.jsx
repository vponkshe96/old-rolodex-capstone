import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./meetingList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const MeetingList = () => {
  const [rows, setRows] = useState([]);
  const columns = [
    {
      field: "image",
      headerName: "Pic",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {/* //no need to add uploads to path since express knows to look inside it for fetching images*/}
            <img
              className="image"
              src={`http://localhost:8080/${params.row.image} `}
              alt=""
            />
          </>
        );
      },
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      //converting date provided by backend into the right format
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];
  //get request to meetings model
  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await axios.get("http://localhost:8080/api/meetings");
      const { data } = response;
      console.log(data);
      setRows(data);
    };
    fetchMeetings();
  }, []);
  return (
    <div className="meetingList">
      <Sidebar />
      <div className="meetingListContainer">
        <Navbar />
        <h1 className="meetingListTitle">Meeting Log</h1>
        hi everybody
        {/* <img src={`http://localhost:8080/${meeting[0]?.image} `} alt="" /> */}
        <DataGrid
          className="meetingListTable"
          //height will adjust to its content
          autoHeight
          rows={rows}
          //specifying which property on row should be considered as id else data grid will throw an error
          getRowId={(row) => row._id}
          columns={columns}
          pageSize={10}
          //need it to set page size
          rowsPerPageOptions={[10]}
          checkoxSelection
          //to prevent entire row from being selected when edit/delete button is clicked
          disableSelectionOnClick
          //can also consider making certain columns editable
        />
      </div>
    </div>
  );
};
export default MeetingList;

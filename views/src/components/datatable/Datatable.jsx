import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

import "./datatable.scss";

const Datatable = () => {
  const [rows, setRows] = useState([]);
  const columns = [
    {
      field: "person",
      headerName: "Person",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="person">
            <img
              className="image"
              src={`http://localhost:8080/${params.row.image} `}
              alt=""
            />
            <span className="fullName">{params.row.fullName}</span>
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerAlign: "center",
      align: "center",
      //converting date provided by backend into the right format
      type: "date",
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className={`status ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="actionButtons">
            {/* relative path from meetinglist to individual meeting */}
            <Link to={`meeting/${params.row._id}`}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutline className="delete" />
          </div>
        );
      },
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
    <div className="datatableContainer">
      <DataGrid
        className="datatable"
        rows={rows}
        //height of table dynamic - depends on no of rows
        autoHeight
        //heifht of row dynamic - depends on content size
        getRowHeight={() => "auto"}
        //specifying which property on row should be considered as id else data grid will throw an error
        getRowId={(row) => row._id}
        columns={columns}
        //to prevent entire row from being selected when edit/delete button is clicked
        checkoxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
export default Datatable;

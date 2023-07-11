import "./userList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../dummyData"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'User',
      headerName: 'Username',
      width: 160,
      renderCell: (params) => {
        return(
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 190 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'transaction', headerName: 'Transaction', width: 150 },
    { field: 'action', headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return(
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];
  
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

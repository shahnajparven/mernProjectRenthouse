import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./ProductList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminPickup,
  deletePickup,
} from "../../actions/pickupAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CallIcon from '@mui/icons-material/Call';
import SideBar from "./Slidebar";
import { DELETE_PICKUP_RESET } from "../../constants/pickupConstants";


const PickupList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, pickups } = useSelector((state) => state.pickups);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.pickup
  );


  const deletePickupHandler = (id) => {
    dispatch(deletePickup(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Pickup Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_PICKUP_RESET });
    }

    dispatch(getAdminPickup());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);


  const columns = [
    { field: "id", headerName: "Pickup ID", minWidth: 150, flex: 0.5 },

    {
      field: "from",
      headerName: "From",
      minWidth: 150,
      flex: 0.4,
    },
    {
      field: "to",
      headerName: "To",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "labour",
      headerName: "Labour",
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: "flour",
      headerName: "Floor",
      minWidth: 150,
      flex: 0.2,
    },
    {
      field: "radio",
      headerName: "Vehicle",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "date",
      headerName: "Date",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "time",
      headerName: "Time",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },


    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deletePickupHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>           
          </Fragment>
        );
      },
    },


    {
      field: "number",
      headerName: "Confirm",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      renderCell: (params) => {
        return (
          <Fragment>
              <a href="tel:{item.number}"> <CallIcon /></a>
          </Fragment>
        );
      },
    },


  ];

  const rows = [];

  pickups &&
    pickups.forEach((item) => {
      rows.push({
        id: item._id,
         from: item.from,
         to: item.to,
         number: item.number,
         labour: item.labour,
         flour: item.flour,
         radio: item.radio,
         date: item.date,
         time: item.time,
      });
    });

  return (
    <Fragment>

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PICKUP REQUEST</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PickupList;
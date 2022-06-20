import React, { useEffect } from "react";
import Sidebar from "./Slidebar";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
 import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import { userDetailsReducer } from "../../reducers/userReducer";
import Renthouse from "../category/Renthouse";
// import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

   const { products } = useSelector((state) => state.products);

   const { orders } = useSelector((state) => state.allOrders);

   const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
   
  }, [dispatch]);

//   let totalAmount = 0;
//   orders &&
//     orders.forEach((item) => {
//       totalAmount += item.totalPrice;
//     });

  const lineState = {
    labels: ["Initial", "total"],
    datasets: [
      {
        label: "TOTAL POST",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, products.length]
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [2, 4],
        // data: [outOfStock, products - outOfStock],
      },
    ],
  };


  return (
    <div className="dashboard">
       
        
      <Sidebar />

      <div className="dashboardContainer">
        <p>.</p>
      <Typography component="h1">Dashboard</Typography>
      

        <div className="dashboardSummary">
          {/* <div>
            <p>
              Total Members <br /> 200
            </p>
          </div> */}
           <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Post</p>
              <p>{products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users.length}</p>
            </Link>
          </div>
        </div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
         <div className="lineChart"> 
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
           <Doughnut data={doughnutState} />
        </div>
        <Renthouse/>
      </div>
    </div>
   
  );
};

export default Dashboard;
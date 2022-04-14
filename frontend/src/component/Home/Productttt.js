import React, { Fragment, useRef, useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import "./Productttt.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../../layout/Loader";
import { Line } from 'react-chartjs-2';


const Productttt = () => {

  

  



  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        dataa: [0, 4000],
      },
    ],
  };

  


  

  return (
   
      <div>
    
    <p>Productttt</p>
    <p>Productttt</p>
    <p>Productttt</p>


    <div className="lineChart"> 

          <Line dataa={lineState} />
        </div>



    </div>

    
   
  );
};

export default Productttt;
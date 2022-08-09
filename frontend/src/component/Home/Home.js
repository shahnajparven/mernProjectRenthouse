import React, { Fragment, useEffect } from "react";
import "./Product.css";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Products from "./Products";
import { Link } from 'react-router-dom';
import Product from "./Product";
import Loader from "../../layout/Loader";
import Bannerr from "../banner/Bannerr";
import Reward from "../reward/Reward";
import Test from "../pickup/Test";
import Banner from "../banner/Banner"
//import Banner from "../banner/Banner";

const Home = () => {


  return (


    <Fragment>

       <Banner/> 
      <Product />
      <Reward />
      <Test/>           
    </Fragment>

  );
};

export default Home;
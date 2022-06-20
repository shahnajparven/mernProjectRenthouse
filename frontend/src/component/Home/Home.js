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

const Home = () => {


  return (


    <Fragment>

      <Bannerr />
      <Product />
      <Reward />
      <Test/>           
    </Fragment>

  );
};

export default Home;
import React, { Fragment, useEffect } from "react";
import "./Product.css";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";


const Product = () => {


  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(state => state.products);

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);



  return (

    <Fragment>
      {loading ? (
        <Loader/>
        ) : (

        <Fragment>
          <div className="container">
            <div className="container" id="container">
              {products && products.map((product) => <ProductCard product={product} />)}
            </div>
          </div>
          <hr />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Product;
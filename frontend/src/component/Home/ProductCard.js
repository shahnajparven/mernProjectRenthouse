import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reactstars from 'react-rating-stars-component';
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Loader from '../../layout/Loader';
import { clearErrors } from "../../actions/productAction";
import "./Product.css";


const ProductCard = ({ product }) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0,1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    color:"black",
    value: product.ratings,
    isHalf: true,
  };

  return (
<Fragment>
 
<Link className='productCard' to={`/product/${product._id}`}>
  <img src={product.images[0].url} alt={product.location} />
  <p>{product.location}</p>
  <div>
    <Reactstars {...options} /><span>({product.numOfReviews} review)</span>
    </div>
    <span>{`৳ ${product.price}`}</span>
</Link>
    
</Fragment>
  );
};

export default ProductCard;
import React, { Fragment, useEffect, useState } from "react";
import "./Products.css"
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard";
import Loader from "../../layout/Loader";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "react-bootstrap";


const categories = [
  "Rent-House",
  "Sublet",
  "Bachelors",
  "Commersial-Area",
];


const Products = ({ match }) => {

  const dispatch = useDispatch();

const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const { products, loading, error, productsCount, resultPerPage } = useSelector(
    (state) => state.products);


  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
if(error){
  alert.error(error);
  dispatch(clearErrors());
}

    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, price, category,alert,error]);



  return (
    <Fragment>
      
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
         <div className="products-container">
          <h2 className="productsHeading">All Rental Houses</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>


          <div className="filterBox">
            <Typography className="price-heding">Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />

            <Typography className="categories-heding">Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>


          </div>


          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
            
          )}
          </div>
        </Fragment>
      )}
    
    </Fragment>
  );
};

export default Products;
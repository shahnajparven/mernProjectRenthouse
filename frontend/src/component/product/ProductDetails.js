import React, { Fragment, useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails,newReview} from '../../actions/productAction';
import { Rating } from '@mui/material';
import "./ProductDetails.css";
import { Dialog, DialogTitle, DialogActions, DialogContent } from '@mui/material';
import { Button } from '@mui/material';
import ReviewCard from './ReviewCard';
import Loader from '../../layout/Loader';
import { useAlert } from 'react-alert';
import ReactStars from 'react-rating-stars-component';
import { addItemsToCart } from '../../actions/cartAction';
import { NEW_REVIEW_RESET } from '../../constants/productConstants';


const ProductDetails = ({ match,history }) => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const addToCartHandler = () => {
    dispatch(addItemsToCart(match.params.id));
    alert.success("Item Added To Cart");
    history.push("/Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", match.params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert, reviewError, success]);


  const options = {
    edit: false,
    color: "rgba(20,20,20,0,1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    color: "black",
    value: product.ratings,
    isHalf: true,
    precision: 0.5,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (

        <Fragment>

          <div className="ProductDetails">
            <div>
              <div className='pics'>
                <Carousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <img
                        className="CarouselImage"
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </Carousel>
              </div>
            </div>

            <div>
              <div className='details'>

                <div className="detailsBlock-1">
                  <h2>{product.name}</h2>
                  <p>Product # {product._id}</p>
                </div>

                <div className="detailsBlock-2">
                  <ReactStars {...options} />
                  {" "}
                  <span>({product.numOfReviews} Reviews)</span>
                </div>

                <div className="detailsBlock-3">
                  <div className="detailsBlock-3-1">
                    <h1>{`BDT: ${product.price}`}</h1>{" "}
                    <button onClick={addToCartHandler}>Add to Cart</button>
                  </div>

                  {/* <p>
                    status:{" "}
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                      {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
                  </p> */}

                </div>
                <br />
                <div className="detailsBlock-4">
                  Description : <p>{product.description}</p>
                </div>
                <button onClick={submitReviewToggle} className="submitReview">
                  Submit Review
                </button>

              </div>
            </div>

          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>





          {product.reviews && product.reviews[0] ? (
            <div className='reviews'>
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}




          {/* <Dialog
            aria-labelledby="simple-dialog-title" >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating/>

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button  color="secondary">
                Cancel
              </Button>
              <Button  color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}  */}


        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
import { Rating } from '@mui/material';
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import reactStars from 'react-rating-stars-component';
import Product from '../Home/Product';

const ReviewCard = ({review}) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0,1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    color: "black",
    value: review.rating,
    isHalf: true,
  };

  return (
    <div className='reviewCard'>
<div className='reviewpic'>

      <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg" alt="User" />
      <p>{review.name}</p>
      </div>
      <div className='reviewdetails'>
    
      <ReactStars {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
    </div>

  );
};

export default ReviewCard;
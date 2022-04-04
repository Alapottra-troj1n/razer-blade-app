import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/Review.css'

const Review = ({review}) => {
    return (
        <div className='review-container'>
                <div className="img-container">
                <img src={review.image} alt="" />
                </div>
                <div className="review-body">
                    <h3>{review.name}</h3>
                    <p>{review.review}</p>
                </div>
                <div className="footer">
                    <h3>{review.star} <FontAwesomeIcon className='rating-star' icon={faStar} /> </h3>
                </div>
        </div>
    );
};

export default Review;
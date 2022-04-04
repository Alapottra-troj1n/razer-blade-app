import React from 'react';
import useReviews from '../custom-hooks/useReviews';
import '../styles/Reviews.css'
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();


    return (
        <div className='reviews-page container'>
            <h2 className='review-page-title colored'>WE APPRECIATE YOUR FEEDBACK</h2>
            <p className='review-page-tagline'>Here’s what some of our customers say about our work.</p>

            <div className="main-reviews-container">
                    {reviews.map((review) => <Review review={review} />)}

            </div>
        </div>
    );
};

export default Reviews;
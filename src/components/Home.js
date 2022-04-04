import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useReviews from "../custom-hooks/useReviews";
import "../styles/Home.css";
import Review from "./Review";

const Home = () => {
  //USED CUSTOM HOOK 
  const [reviews, setReviews] = useReviews();
  console.log(reviews);


  return (
    <div className="container">

      <div className="hero-section">
        <div className="text-container">
          <div className="headline">
            <h4>THE NEW</h4>
            <h1 className='title'>RAZER BLADE <span>15</span> </h1>
            <h3 className="tagline">POWER. PERFORMANCE. PERFECTION.</h3>
            <p className='hero-details'>
              Just when you thought a gaming laptop couldn’t be any more
              beastly introducing the new Razer Blade 15, now available with the
              latest 12th Gen Intel® Core™ processor (14-core) and NVIDIA®
              GeForce RTX™ 30 Series Laptop GPUs for the most powerful gaming
              laptop graphics ever.
            </p>
            <button className='buy-btn'>BUY NOW</button>
          </div>
        </div>

        <div className="laptop-container">
            <img src="https://i.ibb.co/CsRTfMB/https-hybrismediaprod-blob-core-windows-net-sys-master-phoenix-images-container-h00-hd7-928640466947.png" alt="" />
          </div>

      </div>

      <div className="review-section">
        <h2 className="review-title" >CUSTOMER REVIEWS</h2>

        <div className="home-reviews">
            {reviews.slice(0,3).map(review => <Review review={review} key={review.id} />)}
        </div>
        <div className="see-more-section">
        <button className='buy-btn see-more-reviews-btn'> <Link className='see-more-reviews-link' to='/reviews' >See All Reviews</Link> </button>
        </div>
      </div>

      
    </div>
  );
};

export default Home;

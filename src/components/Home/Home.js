import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/customerReview';
import Books from '../Books/Books';

import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReview();
    const getThreeReviews = reviews.slice(0, 3);
    const nevigate = useNavigate();
    return (
        <div>
            <div className='home-container'>
                <div className='home-header'>
                    <h1>CHOOSE YOUR BEST BOOK</h1>
                    <h1>& GET 20% OFF!!</h1>
                    <p>We believe that bookstores are essential to a healthy culture. <br /> They’re where authors can connect with readers.</p>
                    <button className='buy-now-btn'>BUY NOW</button>
                </div>
                <div className='home-page-img'>
                    <img src="https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHF1cmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

            </div>
            <h1 className='customer-review mb-8'>Customer Reviews (3)</h1>
            <div className='home-review'>
                {
                    getThreeReviews.map(review => <Books
                        key={review.id}
                        review={review}
                    ></Books>)
                }
            </div>
            <div>
                <button onClick={() => nevigate('/reviews')} className='see-more-btn'>See More</button>
            </div>
        </div>
    );
};

export default Home;
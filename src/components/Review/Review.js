import React from 'react';
import useReview from '../../hooks/customerReview';
import Books from '../Books/Books';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review-container'>
            <h1>Please Read Our Customer Review!!!</h1>
            <div className='user-review'>

                {
                    reviews.map(review => <Books
                        key={review.id}
                        review={review}></Books>)
                }
            </div>
        </div>

    );
};

export default Review;
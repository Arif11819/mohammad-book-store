import React from 'react';
import './Books.css'

const Books = (props) => {
    const { name, text, picture, ratings } = props.review;
    return (
        <div>
            <div className='books-reviewer'>
                <div className='img-container'>
                    <img src={picture} alt="" />
                </div>
                <h4 className='reviewer-name font-style: italic mt-4'>{name}</h4>
                <h5 className='mt-2 p-4'>{text}</h5>
                <p className='ratings mb-4 mt-4'>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Books;
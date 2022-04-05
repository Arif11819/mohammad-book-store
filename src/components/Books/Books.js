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
                <h4>{name}</h4>
                <h5>{text}</h5>
                <p><small>Ratings: {ratings}</small></p>
            </div>
        </div>
    );
};

export default Books;
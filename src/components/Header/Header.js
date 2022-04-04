import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='text-2xl mt-8'>
                <Link to="/home">HOME</Link>
                <Link to="/reviews">REVIEWS</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link className='mr-6' to="/blogs">BLOGS</Link>
                <Link to="/about">ABOUT</Link>

            </nav>
        </div>
    );
};

export default Header;
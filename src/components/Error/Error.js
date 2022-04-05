import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Error.css'

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='error-container'>
            <button onClick={() => navigate('/home')} className='error-btn'>Back To Home</button >
            <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?t=st=1649163832~exp=1649164432~hmac=0c40afdca29f2c8bb404a143e022760bfc05a05570b69b0d38f729ee768b1689&w=740" alt="" />
        </div>
    );
};

export default Error;
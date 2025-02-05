import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LS() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='d-flex gap-3'>
                <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

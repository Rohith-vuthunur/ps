import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="#">PS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/ls">Login/Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/lts">Look to Sponsor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Showlts">Show Sponsers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

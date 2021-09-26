import React from 'react';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg menu">
                <div className="container">
                    <a className="navbar-brand" href="/home">CORONA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/symptoms">Symptoms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/prevention">Prevention</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Banner></Banner>
        </div>
    );
};

export default Header;
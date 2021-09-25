import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg menu">
                <div class="container">
                    <a class="navbar-brand" href="/home">CORONA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/symptoms">Symptoms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/prevention">Prevention</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/contact">Contact</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
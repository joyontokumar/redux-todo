import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-light header-area">
            <div class="container">
                <a href="index.html" class="navbar-brand">
                    DBLOG
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                    aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navtogglerItemItem">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0" id="main-menu">
                        <li class="nav-item">
                            <a class="nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="header-social-media">
                    <ul>
                        <li>
                            <a href="#">facebook</a>
                            <a href="#">twitter</a>
                            <a href="#">linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

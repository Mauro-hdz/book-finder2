import React from 'react';
// import './style.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar mb-0 bg-dark-brown fixed-top">
                <a className="navbar-brand text-light font-weight-bold .cinzel-decor" href="/">Book-Tastic</a>
                <ul className="navbar-nav ml-5 mr-auto">
                    <li className="mt-0  nav-item">
                        <a className="nav-link text-light" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </nav> 
        </div>

    )

};

export default Navbar;


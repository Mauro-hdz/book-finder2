import React from 'react';
// import './style.css';

function Navbar() {
    return (
        <div>
            <nav className="shadow-lg navbar mb-0 bg-secondary">
                <ul>
                    <li path="/" className="navbar-brand mb-0 pb-0 font-weight-bold text-dark">
                        <a className="navbar-brand text-dark" href="/">Book Genie</a>
                        </li>
                    <li className=" float-right  mt-0  nav-link">
                        <a className="nav-link text-dark" href="/saved">Saved Books</a>
                        </li>
                </ul>
            </nav> 
        </div>

    )

};

export default Navbar;


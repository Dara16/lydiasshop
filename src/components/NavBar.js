import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className='header'>
                <img src="https://t3.ftcdn.net/jpg/03/21/22/88/360_F_321228811_JViep8Q3h40QJsToIH2LzvgWoR58iw8r.jpg" alt="logo" width="100" height="100"/>
                <h1 className="text-center">LYDIA'S BAKE SHOP</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/cakes">Shop</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}
import React from 'react';
import navLogo from '../assets/airbnblogo2.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={navLogo} alt="" className="logo" />
        </nav>
    )
}

export default Navbar
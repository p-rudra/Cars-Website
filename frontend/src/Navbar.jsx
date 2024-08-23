import React, { useState } from "react";
import logo from './assets/logo.svg';
import './Navbar.css';
import Body  from "./Body";
import { Link } from "react-router-dom";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownVisible,setIsDropdownVisible]=useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <div className="navbar">
                <div className='menu-icon' onClick={toggleMenu}>
                    <div className="material-icons">menu</div>
                </div>
                <img src={logo} alt="CarWale Logo" className='logo' />
                <ul className={`elements ${isMenuOpen ? 'open' : ''}`}>
                    <li className='newCars'><Link to='/new-cars'>New Cars</Link></li>
                    <li className="usedCars"><Link to='/used-cars'>Used Cars</Link></li>
                    <li><Link to='/find-dealer'>Find Dealer</Link></li>
                    <li><Link to='/electric-cars'>Electric Cars</Link></li>
                </ul>
                <div className='navbarContainer'>
                    <div className="material-icons location-icon" aria-label="Location">location_on</div>
                    <div className="material-icons account-icon" aria-label="Account">account_circle</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;

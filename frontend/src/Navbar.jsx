import React, { useState } from "react";
import logo from './assets/logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownVisible,setIsDropdownVisible]=useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const username=localStorage.getItem('username')
    function logout(){
        localStorage.removeItem('username')
        window.location.reload()
    }
    return (
        <>
            <div className="navbar">
                <div className='menu-icon' onClick={toggleMenu}>
                    <div className="material-icons">menu</div>
                </div>
                <ul className={`elements ${isMenuOpen ? 'open' : ''}`}>
                    <li className='newCars'><Link to='/new-cars'>New Cars</Link></li>
                    <li className="usedCars"><Link to='/'>Home</Link></li>
                </ul>
                <img src={logo} alt="CarWale Logo" className='logo' />

                <div className='navbarContainer'>
                    <Link to='/auth-options'>
                    <div>
                    {
                    username ? (
                    <button onClick={logout} className="logout-btn">Logout</button> 
                    ):(
                    <div>
                        <button className="login-btn">Login</button>
                    </div>
                    )
                    }
</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;

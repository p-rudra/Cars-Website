import React from "react"
import './Navbar1.css'
import logo from './assets/logo.png'
import { Link } from "react-router-dom";
function Navbar1(){
    const username=localStorage.getItem('username')
    function logout(){
        localStorage.removeItem('username')
        window.location.reload()
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        {/* Left Side: Logo */}
        <img src={logo} alt="AutoSwift" width="150" height="30" className="d-inline-block align-top ms-auto" style={{backgroundColor:'#F8F9FA'}}/>

        {/* Toggle button for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center: Menu items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to='/' style={{textDecoration:'none'}}><a className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link to='/new-cars' style={{textDecoration:'none'}}><a className="nav-link">New Cars</a></Link>
            </li>
          </ul>
          </div>
          {/* Right side:Sign Up button */}
          <div className="ms-auto">
          <Link to='/auth-options' style={{textDecoration:'none'}}>
          {
            username ?(
                <button onClick={logout} className="btn btn-outline-success ms-2 signupBtn">Logout</button>
            ):(
                <button  className="btn btn-outline-success ms-2 signupBtn">Login</button>
            )
          }
          </Link>
          </div>
    </nav>
        </>
    )
}
export default  Navbar1
import React, { useState } from "react";
import "./AuthenticationForUser.css";
import Navbar1 from "./Navbar1";
import axios from 'axios'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Footer";
function AuthenticationForUser() {
  
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const [display, setDisplay] = useState('login');
  console.log(display)
  const [errors,setErrors]= useState({})

  const validateSignUp = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required.";
    }

    if (!formData.email) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateLogin = () => {
    let errors = {};

    if (!loginFormData.email) {
      errors.email = "Email is required.";
    }

    if (!loginFormData.password) {
      errors.password = "Password is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword:''
  });

  const [loginFormData,setLoginFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginInputChange =(e)=>{
    setLoginFormData({...loginFormData,[e.target.name]:e.target.value})
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) {
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', loginFormData);
      toast.success('Login Successful', { autoClose: 5000 });
      setTimeout(() => {
        localStorage.setItem('username', loginFormData.email);
        window.location.reload();
      }, 5000); 
      console.log(localStorage.getItem('username'))
    } catch (error) {
      console.error('Error during login', error);
      toast.error('Invalid Credentials')
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (!validateSignUp()) {
      return; 
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup/', formData);
      toast.success('Successfull!!')
      setDisplay('login')
      console.log(localStorage.getItem('username'))
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  function signupForm() {
    return (
      <div className="signup-form-container">
        <div className="signup-form">
          <h2>Sign Up to CarWale</h2>
          <p>This is necessary to personalize results for you</p>
          <form onSubmit={handleSignUpSubmit}>
            <label htmlFor="name">Username</label>
            <input name='username' type="text" id="name" placeholder="Enter username"  onChange={handleInputChange} />
            {errors.username && <p className="error-message" style={{color:'red'}}>{errors.username}</p>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Id"
              onChange={handleInputChange}
              name='email'
              
            />
            {errors.email && <p className="error-message" style={{color:'red'}}>{errors.email}</p>}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={handleInputChange}
              
              name='password'
            />
            {errors.password && <p className="error-message" style={{color:'red'}}>{errors.password}</p>}
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="mobile"
              placeholder="Enter confirm password"
              
              onChange={handleInputChange}
              name='confirmPassword'
            />
            {errors.confirmPassword && <p className="error-message" style={{color:'red'}}>{errors.confirmPassword}</p>}
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <button
              name="login"
              type="button"
              className="login-button"
              onClick={() => setDisplay('login')}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }

  function loginForm() {
    return (
      <div className="custom-modal">
        <div className="custom-modal-content">
          <h2>Login to Your Account</h2>
          <p>This is necessary to personalize results for you</p>
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Enter Your Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleLoginInputChange}
              placeholder="Enter Your Email Id"
              
            />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="password">Enter Your Password</label>
            <div className="password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                onChange={handleLoginInputChange}
                placeholder="Enter Your Password"
                
                minLength="8"
              />
              {errors.password && <p className="error-message">{errors.password}</p>}
              <span id="togglePassword" onClick={togglePasswordVisibility}>
                {passwordVisible ? 'Hide' : 'Show'}
              </span>
            </div>
            <button type="submit" className="login-btn">Login</button>
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                className="signup-button"
                name="signup"
                onClick={() => setDisplay('signup')}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
  function isSignUpOrLogin() {
    if (display === 'signup') {
      return signupForm();
    } else {
      return loginForm();
    }
  }

  return (
    <>
      <Navbar1/>
      <br />
      <br />
      <br />
      {isSignUpOrLogin()}
      <ToastContainer/>
      <br />
      <br />
      <br />
      <br />
      <br />  
      <br />  
      <br />  
      <br />  
      <br />  
      <br />      
      <Footer/>
    </>
  );
}

export default AuthenticationForUser;

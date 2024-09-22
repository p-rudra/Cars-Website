import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Top Section */}
                <div className="footer-sections">
                    <div className="footer-about">
                        <h4>About Us</h4>
                        <p>CarInfo is your go-to platform for finding the best cars on the market.We bring you the latest information about new cars, popular cars, and upcoming launches.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="http://localhost:8000/api/featured-cars/">Trending Cars</a></li>
                            <li><a href="http://127.0.0.1:8000/api/popular-cars/">Popular Cars</a></li>
                            <li><a href="http://127.0.0.1:8000/api/upcoming-cars/">Upcoming Cars</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <h4>Contact Us</h4>
                        <div className="social-icons">
                            123-456-7890
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom">
                    <p>&copy; 2024 CarInfo. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

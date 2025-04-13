import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">
        
        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p><FaEnvelope className="mr-2" /> support@example.com</p>
          <p><FaPhone className="mr-2" /> +123 456 7890</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
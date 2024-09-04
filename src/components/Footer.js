import React from 'react';
import "../css/Footer.css";
import indiamartLogo from '../assets/INDIAMART.png';


function Footer() {
  return (
    <footer>
      <div id="footer_section">
        {/* Head Office Section */}
        <div className="footer-section">
          <h2>Head Office</h2>
          <ul>
            <li>
              <a href="https://www.google.com/maps/place/S+V+TRADING+CO./@18.4623178,73.921628,786m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2ea2335304ef3:0x84a7a8a7dd73718b!8m2!3d18.4623127!4d73.9242029!16s%2Fg%2F11c2kgvg0q?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-map-marker-alt"></i> Heramb Laboratories Pvt. Ltd. <br />
                37/297 Maharshi Nagar, Parvati, <br />
                Pune-411009, Maharashtra, India.
              </a>
            </li>
            <li>
              <a href="tel:+919822912970">
                <i className="fas fa-phone-alt"></i> Phone: +91 98229 12970 / +91 98909 11136<br />
                
                {/* +91 9049331047 */}
              </a>
            </li>
            <li>
              <a href="mailto:info@heramblaboratory.co.in">
                <i className="fas fa-envelope"></i> Email: info@heramblaboratory.co.in
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h2><a href="/product">Products</a></h2>
          <ul>
            <li><a href="#">Resins & Gelcoats</a></li>
            <li><a href="#">Fiber Reinforcement Plastic & Core Materials</a></li>
            <li><a href="#">Wax & Mould Release</a></li>
            <li><a href="#">Tools & Ancillary</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/production">Manufacturing / Production</a></li>
            <li><a href="/testing">Testing</a></li>
            <li><a href="/rnd">R & D</a></li>
            <li><a href="/rewards">Rewards and Recognition</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            {/* <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtub"></i>
            </a> */}

            <a href="https://www.indiamart.com/heramblaboratories-pune/profile.html" target="_blank" rel="noopener noreferrer">
              <img src={indiamartLogo} alt="Indiamart" className="indiamart-logo" />
              <span className="indiamart-text">Indiamart</span>
            </a>
          </div>
        </div>
      </div>

       {/* Copyright Line */}
       <div className="footer-copyright">
        <p>© 2024 Heramb Laboratories Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;





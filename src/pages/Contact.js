import React from 'react';
import Imgrefresher from '../assets/image1.jpg';
import Image1 from '../assets/contact1.png';
import '../css/Contact.css';
import indiamartLogo from '../assets/INDIAMART.png';
import backgraundImage from '../assets/cantact_backgraund.png';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div className='contact'>
            <React.Fragment>
                <section className="section-wrap" id="bannersection">
                    <div className="section-container-full">
                        <div className="banner_images_2">
                            <div className="banner_images_desk">
                                <img 
                                    src={Image1} 
                                    alt="Contact Banner"
                                    className="desktop_banner"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <main id="content" className="site-main post-7 page type-page status-publish hentry"> */}
                    {/* <header className="page-header">
                        <h1 className="entry-title">Contact Us</h1>
                        <p>
                            At Heramb Laboratory Pvt Ltd., we are dedicated to providing unparalleled technical support within the composites industry...
                        </p>
                    </header> */}

                    <div className="page-content">
                    <header className="page-header">
                        <h1 className="entry-title">Contact Us</h1>
                        <p>
                            At Heramb Laboratory Pvt Ltd., we are dedicated to providing unparalleled technical support within the composites industry...
                        </p>
                    </header>
                        <div className="elementor elementor-7">
                            <div className="elementor-element elementor-element-14d6429 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                                <div className="e-con-inner">
                                  

                                    {/* Contact Form and Side Image */}
                                    <div className="contact-form-and-image">
                                        <form className="contact-form" action="#" method="POST">
                                            <label htmlFor="name">Name:</label>
                                            <input type="text" id="name" name="name" required />

                                            <label htmlFor="email">Email:</label>
                                            <input type="email" id="email" name="email" required />

                                            <label htmlFor="message">Message:</label>
                                            <textarea id="message" name="message" required></textarea>
                                            <button type="submit">Send Message</button>
                                        </form>

                                        <div className="contact-image">
                                            <img src={Imgrefresher} alt="Contact Side Image" />
                                        </div>
                                    </div>


                                      {/* Contact Information Section */}
                                      <div className="contact-info-container-horizontal animated fadeInRight">
                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Head Office</h3>
                                                <a href="https://www.google.com/maps/place/S+V+TRADING+CO./@18.4623178,73.921628,786m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2ea2335304ef3:0x84a7a8a7dd73718b!8m2!3d18.4623127!4d73.9242029!16s%2Fg%2F11c2kgvg0q?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                                    <i className="fas fa-map-marker-alt"></i> Heramb Laboratories Pvt. Ltd. <br />
                                                    37/297 Maharshi Nagar, Parvati, <br />
                                                    Pune-411009, Maharashtra, India.
                                                </a>
                                            </div>
                                        </div>

                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Email</h3>
                                                <p>
                                                    <FontAwesomeIcon icon={faEnvelope} /> 
                                                    <a href="mailto:info@heramblaboratory.com"> info@heramblaboratory.com</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Contact Number</h3>
                                                <p>
                                                    <FontAwesomeIcon icon={faPhone} /> 
                                                    <a href="tel:+911234567890"> +91 12345 67890</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Follow Us and Map Section */}
                                    <div className="follow-us-map">
                                        <h3>Follow Us</h3>
                                        <div className="social-links">
                                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faFacebookF} />
                                            </a>
                                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                            <a href="https://wa.me/9657699912?text=Welcome%20to%20Heramb%20Laboratory" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                            </a>
                                            <a href="https://www.indiamart.com/" target="_blank" rel="noopener noreferrer">
                                                <img src={indiamartLogo} alt="Indiamart" />
                                            </a>
                                        </div>

                                        {/* <h3>Our Location</h3>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8236144066446!2d144.95592831510934!3d-37.81720997975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f4e7a5f%3A0x11d0f4c0f573c5ef!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1611558525475!5m2!1sen!2sau"
                                            width="600"
                                            height="450"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </main> */}
            </React.Fragment>
        </div>
    );
};

export default Contact;

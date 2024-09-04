import React from 'react';
import Imgrefresher from '../assets/image1.jpg';
import Image1 from '../assets/contact1.png'
import '../css/Contact.css'; // Ensure that the CSS file is correctly imported

function Contact() {
    return (
        <React.Fragment>

{/* <section className="contact-image-section">
                <div className="contact-image-container">
                    <img src={Image1} alt="Contact Banner" className="contact-image" />
                </div>
            </section> */}


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
                        <div className="banner_images_mobi">
                            {/* <img 
                                src={Image1}
                                alt="Contact Banner Mobile"
                                className="mobile_banner"
                            /> */}
                        </div>
                    </div>
                </div>
            </section>

            <main id="content" className="site-main post-7 page type-page status-publish hentry">
                <header className="page-header">
                    <h1 className="entry-title">Contact Us</h1>
                    <p>
                        At Link Composites, we are dedicated to providing unparalleled technical support within the composites industry. With a team boasting extensive experience across all facets of composites manufacturing and production, our goal is to optimize our customers, product performance and manufacturing processes. Leveraging our solid industry knowledge and offering personalized recommendations, we’ve helped our clients achieve significant cost savings while enhancing output capabilities for their composite products. With over 25 years of collective experience in sourcing top quality composite materials from trusted manufacturers, we ensure the highest standards of excellence in every aspect of our service.
                    </p>
                </header>
                <div className="page-content">
                    <div className="elementor elementor-7">
                        <div className="elementor-element elementor-element-14d6429 e-flex e-con-boxed e-con e-parent e-lazyloaded">
                            <div className="e-con-inner">
                                <div className="elementor-element elementor-element-4d7b27b divider_head elementor-widget elementor-widget-heading">
                                    <div className="elementor-widget-container">
                                        {/* <h2 className="elementor-heading-title elementor-size-default">Contact Us</h2> */}
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-59ea442 elementor-widget elementor-widget-text-editor animated fadeInLeft">
                                    <div className="elementor-widget-container">
                                        <p>
                                            At Heramb Laboratory Pvt Ltd., we are dedicated to providing unparalleled technical support within the composites industry...
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Information Section */}
                                <div className="elementor-element elementor-element-contact-info">
                                    <div className="contact-info-container-horizontal animated fadeInRight">
                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Head Office</h3>
                                                <p>Heramb Laboratory Pvt Ltd.<br />
                                                123 Industrial Estate,<br />
                                                Mumbai, India - 400001
                                                </p>
                                            </div>
                                        </div>

                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Email</h3>
                                                <p>info@heramblaboratory.com</p>
                                            </div>
                                        </div>

                                        <div className="contact-info-item">
                                            <div className="contact-info-box">
                                                <h3>Contact Number</h3>
                                                <p>+91 12345 67890</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form (Optional) */}
                                <div className="elementor-element elementor-element-contact-form">
                                    {/* <form className="contact-form" action="#" method="POST">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="name" required />

                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required />

                                        <label htmlFor="message">Message:</label>
                                        <textarea id="message" name="message" required></textarea> 
                                        <button type="submit">Send Message</button>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Contact;

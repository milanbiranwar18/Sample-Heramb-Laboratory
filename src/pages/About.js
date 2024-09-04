import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/About.css";
import MissionVision from './MissionVision';
import AboutImage from '../assets/about4.png'; // Add your image here

function About() {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div>
            {/* Part 1: Image Section */}
            <section className="image-section">
                <div className="image-container">
                    <img src={AboutImage} alt="Heramb Laboratory" className="about-image" />
                </div>
            </section>

            {/* Part 2: About Us Section */}
            <section className="about-section">
                <div className="about-content" data-aos="fade-up">
                    <h1>About Us</h1>
                    <p className="lead-text">
                        Heramb Laboratory Pvt. Ltd. has been a leader in the chemical industry for over a decade, providing innovative solutions to clients worldwide.
                    </p>
                </div>
                <div className="journey-section" data-aos="fade-up">
                    <h2>Our Journey</h2>
                    <p>
                        Since our inception in 1985, Heramb Laboratory Pvt Ltd. has evolved from a small-scale operation into a global leader in fiber molding and chemical manufacturing. With a commitment to continuous improvement and innovation, we have expanded our capabilities, serving clients across diverse industries.
                    </p>
                    <p>
                        Today, as a second-generation company, we continue to uphold our founding principles while embracing the future with new technologies and solutions. Our team’s dedication to excellence, innovation, and customer satisfaction is what drives our success.
                    </p>
                </div>
            </section>

            {/* Part 3: Mission and Vision Section */}
            <section className="mission-vision-section">
                <MissionVision />
            </section>
        </div>
    );
}

export default About;

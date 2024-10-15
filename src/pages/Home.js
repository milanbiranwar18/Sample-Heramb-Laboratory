import React from "react";
import ImageSlider from "./ImageSlider";
import Home_page1 from "./Home_page1";
import SlideText from "./SlideText";
import PopupBoxes from "./PopupBoxes";
import "../Home.css"; 

function Home() {
    return (
        <div className="home-container">
            {/* Section 1: Image Slider */}
            <section>
                <ImageSlider />
            </section>

            {/* Company Introduction */}
            <section className='company_section1'>
                <ul className='company_ul1'>
                    <li className='comapny_li1'>
                        With over three decades of excellence, Heramb Laboratory Pvt Ltd. has been at the forefront of fiber molding and chemical production since 2007.
                        As a second-generation, family-owned company, we blend tradition with innovation, delivering top-tier products that meet the evolving needs of industries worldwide.
                    </li>
                </ul>
                <a href="/about" className="about-button">Who We Are →</a>
            </section>

            {/* Other Sections */}
            <section>
                <Home_page1 />
            </section>

            <section>
                <SlideText />
            </section>

            <section>
                <PopupBoxes />
            </section>
        </div>
    );
}

export default Home;

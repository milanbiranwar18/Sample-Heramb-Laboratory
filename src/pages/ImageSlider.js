import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import '../css/ImageSlider.css';
import backgroundImage1 from '../assets/home12.png';
import backgroundImage2 from '../assets/home10.png';
import backgroundImage3 from '../assets/home13.png';
import image1 from '../assets/home11.png';


function ImageSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      heading: "Welcome to Heramb Laboratory Pvt Ltd", // Added heading
      title: "Passion that Powers Progress",
      text: "Forging strategic collaborations through transparency and trust",
      backgroundImage: backgroundImage1,
      link: "",
      btnText: "Read More"
    },
    {
      id: 2,
      heading: "Welcome to Heramb Laboratory Pvt Ltd", // Added heading
      title: "Your Dependable Source for All Things Composite",
      text: "For 25+ years, we’ve enabled growth in the composite industry through a foundation of trust & transparent practices.",
      backgroundImage: backgroundImage2,
      link: "",
      btnText: "Read More"
    },
    {
      id: 3,
      heading: "Welcome to Heramb Laboratory Pvt Ltd", // Added heading
      title: "We Provide More Than Composite Products",
      text: "From securing premier raw materials to offering comprehensive technical support, businesses benefit from our holistic approach.",
      backgroundImage: backgroundImage3,
      link: "",
      btnText: "Read More"
    },
    {
      id: 4,
      heading: "Welcome to Heramb Laboratory Pvt Ltd", // Added heading
      title: "We Provide More Than Composite Products",
      text: "From securing premier raw materials to offering comprehensive technical support, businesses benefit from our holistic approach.",
      backgroundImage: image1,
      link: "",
      btnText: "Read More"
    },
  ];
  

  return (
    <section className="hero-slider hero-style">
  <Swiper
    spaceBetween={0}
    effect="fade"
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    modules={[Navigation, Pagination, EffectFade, Autoplay]}
    onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={slide.id}>
        <div className="slide-inner" style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
          <div className="container home_banner_txt">
            <div className={`slide-heading ${index === activeSlideIndex ? 'animate-in' : 'animate-out'}`}>
              <h1>{slide.heading}</h1> {/* Render the heading */}
            </div>
            <div className={`slide-title ${index === activeSlideIndex ? 'animate-in' : 'animate-out'}`}>
              <h2>{slide.title}</h2> {/* Changed to h2 to reflect heading hierarchy */}
            </div>
            <div className={`slide-text ${index === activeSlideIndex ? 'animate-in' : 'animate-out'}`}>
              <p>{slide.text}</p>
            </div>
            <div className={`slide-btns ${index === activeSlideIndex ? 'animate-in' : 'animate-out'}`}>
              <a href={slide.link} className="comn_btn">
                <span>{slide.btnText}</span>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
}

export default ImageSlider;


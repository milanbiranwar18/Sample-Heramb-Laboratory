// import React from "react";
// import "../css/Production.css";

// function Production() {
//   return (
// <section class="sustainability">
//         <div class="container position-relative">
//             <div class="row">
                
//                 <div class="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
//                     <h2 class="f-bold orange">SUSTAINABILITY</h2>
//                     <h2>Responsible Workforce Responsible Chemistry</h2>
//     <p class="f-thin">Aarti Industries Limited (AIL) takes a holistic approach towards sustainability. We optimise the use of available resources, such as raw materials, utilities and human resources to minimise our environmental footprint.</p>
//                     <a class="f-light" href="/sustainability">Read more <span class="icon-aarti-right-arrow-2"></span></a>
    
//                 </div>
    
//                 <div class="col-md-8">
//                     <div class="img-div">
                        
//                         <div class="img-wrapp aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
//                             <img src="assets/Designer3.png" class="img-fluid sust-2" alt="" title="" />
//                             <span class="f-medium bg-orange">Safety</span>
//                         </div>
//                         <div class="img-wrapp sust-productivity aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
//                             <img src="assets/Designer2.png" class="img-fluid sust-3" alt="" title="" />
//                             <span class="f-medium bg-blue">Productivity</span>
//                         </div>
//                     </div>
//                     <div class="img-right aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
//                         <img src="assets/Designer1.png" class="img-fluid sust-1" alt="" title="" />
//                         <span class="f-medium bg-orange">Reliability</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
        
//     </section>
//   );
// }

// export default Production;






// import React from "react";
// import "../css/Production.css";
// import designer3 from '../assets/Designer3.png';
// import designer2 from '../assets/Designer2.png';
// import designer1 from '../assets/image1.jpg';

// function Production() {
//   return (
//     <section className="sustainability">
//       <div className="container position-relative">
//         <div className="row">
//           <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
//             {/* <h1>Innovating Fiber Molding and Chemical Solutions Since 1985</h1> */}
           
//             <h2 className="f-bold orange">SUSTAINABILITY</h2>
//             <h2>Responsible Workforce Responsible Chemistry</h2>
//             <p className="f-thin">
//             Heramb Laboratory takes a holistic approach towards sustainability. We optimise the use of available resources, such as raw materials, utilities and human resources to minimise our environmental footprint.
//             </p>
//             <a className="f-light" href="/about">Read more <span className="icon-aarti-right-arrow-2"></span></a>
//           </div>

//           <div className="col-md-8">
//             <div className="img-div">
//               <div className="img-wrapp aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
//                 <img src={designer3} className="img-fluid sust-2" alt="Safety" />
//                 <span className="f-medium bg-orange">Safety</span>
//               </div>
//               <div className="img-wrapp sust-productivity aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
//                 <img src={designer2} className="img-fluid sust-3" alt="Productivity" />
//                 <span className="f-medium bg-blue">Productivity</span>
//               </div>
//             </div>
//             <div className="img-right aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
//               <img src={designer1} className="img-fluid sust-1" alt="Reliability" />
//               <span className="f-medium bg-orange">Reliability</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Production;



import React, { useEffect, useRef } from 'react';
import '../css/Home_page1.css';
import designer3 from '../assets/Designer3.png';
import designer2 from '../assets/Designer2.png';
import designer1 from '../assets/image1.jpg';

function Home_page1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseEnter = () => {
      const elements = section.querySelectorAll('.img-wrapp');
      elements.forEach((element) => {
        element.classList.add('show');
      });
    };

    const handleMouseLeave = () => {
      const elements = section.querySelectorAll('.img-wrapp');
      elements.forEach((element) => {
        element.classList.remove('show');
      });
    };

    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="sustainability" ref={sectionRef}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-4">
            <h2 className="f-bold orange">SUSTAINABILITY</h2>
            <h2>Responsible Workforce Responsible Chemistry</h2>
            <p className="f-thin">
              Heramb Laboratory takes a holistic approach towards sustainability. We optimise the use of available resources, such as raw materials, utilities and human resources to minimise our environmental footprint.
            </p>
            <a className="f-light" href="/about">Read more <span className="icon-aarti-right-arrow-2"></span></a>
          </div>

          <div className="col-md-8">
            <div className="img-div">
              <div className="img-wrapp fade-right">
                <img src={designer3} className="img-fluid sust-2" alt="Safety" />
                <span className="f-medium bg-orange">Safety</span>
              </div>
              <div className="img-wrapp fade-up">
                <img src={designer2} className="img-fluid sust-3" alt="Productivity" />
                <span className="f-medium bg-blue">Productivity</span>
              </div>
            </div>
            <div className="img-right">
              <div className="img-wrapp fade-left">
                <img src={designer1} className="img-fluid sust-1" alt="Reliability" />
                <span className="f-medium bg-orange">Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_page1;
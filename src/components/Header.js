// import React from 'react';
// import { Link } from 'react-router-dom';
// import Imgrefresher from '../assets/logo.jpg';


// function Header() {
//     return (  
//         <header>
//             <h1>Heramb Laboratory Pvt. Ltd.</h1>
//         </header>
       
//     );
// }

// export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Imgrefresher from '../assets/Heramb.png';

// function Header() {
//     return (  
//         <header className="header">
//             <img src={Imgrefresher} className="logo" alt="Heramb Laboratory Logo" />
//             <h1 className="header-title">Heramb Laboratory Pvt. Ltd.</h1>
//         </header>
//     );
// }

// export default Header;




import React from 'react';
import { Link } from 'react-router-dom';
import Imgrefresher from '../assets/Heramb.png';

function Header() {
    return (  
        <header className="header">
            
            <div className="logo-container">
            <Link to="/">
                <img src={Imgrefresher} className="logo" alt="Heramb Laboratory Logo" />
                </Link>
            </div>
            <h1 className="header-title">Engineering Excellence in Fiber and Chemical Innovation</h1>
            <p></p>
        </header>
    );
}

export default Header;

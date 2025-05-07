// import React from 'react'
// import Logo from "../assets/Logo.png";
// import Search from "../assets/search-normal.png"
// import heart from "../assets/heart.png"
// import arrowLeft from "../assets/arrow-left.png"
// import Profile from "../assets/profile.png"
// import Shopping from "../assets/shopping-bag.png";
// import { useState } from 'react';
// import "../App.css";
// const HeaderPart = () => {
//     const [selectedOption, setSelectedOption] = useState('');

//     const handleChange = (e) => {
//         setSelectedOption(e.target.value);
//     };
//     return (
//         <div>
//             <div>
//                 <img src={Logo} />
//                 <p>LOGO</p>
//                 <div>
//                     <img src={Search} />
//                     <img src={heart} />
//                     <img src={Shopping} />
//                     <img src={Profile} />
//                     <div style={{display:'flex', flexDirection:'row'}}>
//                         <label> </label>
//                         <select value={selectedOption} onChange={handleChange}>
//                             <option value="">ENG</option>
//                             <option value="React">React</option>
//                             <option value="Angular">Angular</option>
//                             <option value="Vue">Vue</option>
//                         </select>


//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default HeaderPart;



import React, { useState } from 'react';
import '../App.css';
import Logo from '../assets/Logo.png';
import Search from '../assets/search-normal.png';
import Heart from '../assets/heart.png';
import Shopping from '../assets/shopping-bag.png';
import Profile from '../assets/profile.png';
import arrowLeft from "../assets/arrow-left.png"

const HeaderPart = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className="header-container">
                <div className="header-top">
                    <img src={Logo} alt="Logo" className="logo-img" />
                    <p className="header-title">LOGO</p>

                    <div className="header-icons">
                        <img src={Search} alt="Search" className="icon-img" />
                        <img src={Heart} alt="Heart" className="icon-img" />
                        <img src={Shopping} alt="Shopping" className="icon-img" />
                        <img src={Profile} alt="Profile" className="icon-img" />
                        <select
                            value={selectedOption}
                            onChange={handleChange}
                            className="language-select"
                        >
                            <option value="">ENG</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                </div>


                <div className="nav-menu">
                    <span className="nav-item">SHOP</span>
                    <span className="nav-item active">SKILLS</span>
                    <span className="nav-item">STORIES</span>
                    <span className="nav-item">ABOUT</span>
                    <span className="nav-item">CONTACT US</span>
                </div>


            </div>
            <div className='Para-container'>
                <p className="title">DISCOVER OUR PRODUCTS<p />
                    <p className="para">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                        <br />scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p></p>
            </div>

            <div className="filter-bar">
                <div className="left-section">
                    <span className="item-count">3425 ITEMS</span>
                    <div className="filter-toggle">
                        <img src={arrowLeft} />
                        <span className="hide-filter-text">HIDE FILTER</span>
                    </div>
                </div>

                <div className="right-section">
                    <span className="recommended-text">RECOMMENDED</span>
                    <img src={arrowLeft} />
                </div>
            </div>
        </>
    );
};

export default HeaderPart;

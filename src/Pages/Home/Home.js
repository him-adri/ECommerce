import React from "react";
import "./Home.css";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <div className="home-first-text">
          <p>ONLINE<br/>SHOPPING</p>
        </div>
        <div className="home-second-text">
          <p>
            E-COMMERCE DIGITAL WEBSITE
          </p>
        </div>
        <div className="home-third-text">
          <p>
           FREE SHIPPING. TERMS AND CONDITION APLLIED.
          </p>
        </div>
        <div className="home-btn">
            <div><button>Shop Now </button></div>
            <span><ArrowRightAltSharpIcon className="arrow"/></span>
        </div>
      </div>
      <div className="home-image">
        <div className="image">
          <img src={require('../../Assets/home-image.png')} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import "../../assets/styles/Home.css";
import Card from "./Card";
import Card2 from "./Card2"; // This import is unused in the provided code, consider removing if not used elsewhere
import Footer from "../common/Footer";
// import Footer1 from "../common/Footer1"; // This import is unused in the provided code, consider removing if not used elsewhere
import HowitWorks from "./HowItWorks";
import React from "react";
import SubmitWaste from "../user/SubmitWaste";
import homeImage from "../../assets/images/convebtional.jpeg"; // Update with your static image path
import { Link } from "react-router-dom";

// src/components/Home.js

const Home = ({ isLoggedIn }) => {
  return (
    <div className="home">
      <div className="hero-container">
        <img
          className="d-block w-100"
          src={homeImage}

          alt="Static background"
        />
      </div>
      <div className='des'>
        <p>
          Here at our platform, you can submit your waste and earn coins. These coins can be converted to money or used to buy products from our shop. We ensure that your waste is collected and sent to recycling plants, benefiting the environment and helping us all.
        </p>
        {!isLoggedIn && (
          <div className="home-buttons">
            <Link to="/login" className="home-button">🔒 LOGIN</Link>
            <Link to="/register" className="home-button">📝 REGISTER</Link>
            <Link to="/job" className="find-job-button">🔍 SEARCH JOB</Link> {/* Updated Find Job button */}
          </div>
        )}
      </div>
      {!isLoggedIn && <HowitWorks />}
      <SubmitWaste />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.png";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 class="animate-charcter">Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
          <p className="animated-text"><button>ORDER NOW</button></p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

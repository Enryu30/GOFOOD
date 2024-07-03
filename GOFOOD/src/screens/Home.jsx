import React from 'react';
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import { CustomCarousel } from "../components/CustomCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <CustomCarousel />
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

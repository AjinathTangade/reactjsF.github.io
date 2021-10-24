import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/A5.png"
import Features from './Features';
import Homeabout from "./Homeabout";
import Service from './Service';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Homeabout
        name="Grow Your business"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />

      
      <Features />
      <About />
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
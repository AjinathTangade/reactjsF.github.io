import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/img/A1.png"
import Homeabout from "./Homeabout";

const About = () => {
  return (
    <div>
      <Homeabout 
       title="About us"
       name="Welcome to About page"
       imgsrc={web}
       visit="/contact"
       btnname="Contct Now"
      />
    </div>
  );
}

export default About;
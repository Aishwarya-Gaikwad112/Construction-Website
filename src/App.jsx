import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Working from "./sections/Working";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return(
<>
<Header/>
<Hero/>
<About/>
<Services/>
<Portfolio/>
<Working/>
<Testimonials/>
<Contact/>
<Footer/>

</>
  )
}
export default App
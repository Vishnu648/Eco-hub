import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from '../components/Footer'

function Pages() {
  const [selectedPage, setSelectedPage] = useState("home");

  const optionSetter = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="relative">
      <Navbar optionSetter={optionSetter} />
      {selectedPage == "home" ? (
        <Home />
      ) : selectedPage == "about" ? (
        <About />
      ) : selectedPage == "gallery" ? (
        <Gallery />
      ) : selectedPage == "contact" ? (
        <Contact />
      ) : (
        <h2>Page not found...</h2>
      )}
      <Footer/>
    </div>
  );
}

export default Pages;

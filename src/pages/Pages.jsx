import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";

function Pages() {
  const [selectedPage, setSelectedPage] = useState("home");

  const optionSetter = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
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
    </div>
  );
}

export default Pages;

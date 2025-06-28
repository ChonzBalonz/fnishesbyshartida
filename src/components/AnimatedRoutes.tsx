import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import "../App.css";
import "./PageTransitions.css";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="page" timeout={400}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoutes;

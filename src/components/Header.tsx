import { Link } from "react-router-dom"; // <-- 1. Import Link
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* ... (the header-top div remains the same) ... */}
      <div className="header-top">
        <div className="contact-info">
          <span>Client Services: (123) 456-7890</span>
          <span>Email: info@finishesbyshartida.com</span>
        </div>
        <div className="social-links">
          <a href="#">f</a>
          <a href="#">t</a>
          <a href="#">in</a>
        </div>
      </div>

      <nav className="main-nav">
        <div className="logo">
          {/* Logo links back to home */}
          <Link to="/">Finishes by Shartida</Link>
        </div>
        <ul className="nav-links">
          {/* 2. Change a to Link */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="quote-button">Request Quote</button>
      </nav>
    </header>
  );
}

export default Header;

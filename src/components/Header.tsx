import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* The logo is now a direct child of the header */}
      <div className="logo">
        <Link to="/">Finishes by Shartida</Link>
      </div>

      {/* The nav element now only contains the links and button */}
      <nav className="main-nav">
        <ul className="nav-links">
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

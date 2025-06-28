import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo removed as requested */}
      <nav className="main-nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
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
        <a href="mailto:Anthony3303@outlook.com" className="quote-button">
          Request Quote
        </a>
      </nav>
    </header>
  );
}

export default Header;

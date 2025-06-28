import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="contact-info">
          <span>Client Services: (123) 456-7890</span>
          <span>Email: info@finishesbyshartida.com</span>
        </div>
        <div className="social-links">
          {/* Add your social media links here */}
          <a href="#">f</a>
          <a href="#">t</a>
          <a href="#">in</a>
        </div>
      </div>
      <nav className="main-nav">
        <div className="logo">Finishes by Shartida</div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="quote-button">Request Quote</button>
      </nav>
    </header>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setAcademicsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner container">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeAll}>
          <img src="https://rankridgeschools.com/assets/img/logo-4.png" alt="Rankridge logo" width={200}/> 
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="main-menu d-none d-lg-flex">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>

          {/* ACADEMICS */}
          <li className={`menu-item ${academicsOpen ? "open" : ""}`}>
            <button
              className="menu-btn"
              onClick={() => setAcademicsOpen(!academicsOpen)}
            >
              Academics ▾
            </button>

            <ul className="drop-menu">
              <li><NavLink to="/academics/pre-primary" onClick={closeAll}>Pre Primary</NavLink></li>
              <li><NavLink to="/academics/primary" onClick={closeAll}>Primary</NavLink></li>
              <li><NavLink to="/academics/middle-secondary" onClick={closeAll}>Middle to Secondary</NavLink></li>
              <li><NavLink to="/academics/iit-jee-neet" onClick={closeAll}>IIT-JEE & NEET</NavLink></li>
              <li><NavLink to="/academics/cbse" onClick={closeAll}>CBSE</NavLink></li>
              <li><NavLink to="/academics/state-board" onClick={closeAll}>State Board</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/admissions">Admissions</NavLink></li>
          <li><NavLink to="/student-life">Student Life</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contactUs">Contact Us</NavLink></li>
        </ul>

        {/* DESKTOP REGISTER */}
        <NavLink to="/register" className="register-btn d-none d-lg-inline">
          Register
        </NavLink>

        {/* HAMBURGER */}
        <button
          className="hamburger d-lg-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* MOBILE NAV */}
        {menuOpen && (
          <div className="mobile-nav">
            <NavLink to="/" onClick={closeAll}>Home</NavLink>
            <NavLink to="/about" onClick={closeAll}>About</NavLink>

            <button
              className="menu-btn"
              onClick={() => setAcademicsOpen(!academicsOpen)}
            >
              Academics ▾
            </button>

            {academicsOpen && (
              <div className="mobile-submenu">
                <NavLink to="/academics/pre-primary" onClick={closeAll}>Pre Primary</NavLink>
                <NavLink to="/academics/primary" onClick={closeAll}>Primary</NavLink>
                <NavLink to="/academics/middle-secondary" onClick={closeAll}>Middle to Secondary</NavLink>
                <NavLink to="/academics/iit-jee-neet" onClick={closeAll}>IIT-JEE & NEET</NavLink>
                <NavLink to="/academics/cbse" onClick={closeAll}>CBSE</NavLink>
                <NavLink to="/academics/state-board" onClick={closeAll}>State Board</NavLink>
              </div>
            )}

            <NavLink to="/admissions" onClick={closeAll}>Admissions</NavLink>
            <NavLink to="/student-life" onClick={closeAll}>Student Life</NavLink>
            <NavLink to="/events" onClick={closeAll}>Events</NavLink>
            <NavLink to="/blog" onClick={closeAll}>Blog</NavLink>

            {/* MOBILE REGISTER */}
            <NavLink to="/register" className="register-btn" onClick={closeAll}>
              Register
            </NavLink>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;

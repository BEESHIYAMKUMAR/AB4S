import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  
  const navigate=useNavigate();

  function handleclick (){
    navigate("/Login")
  }

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/AB4S_logo.png" alt="AB4S"/>
      </div>
      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>        
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Mission"
              className="navbar--content"
            >
              Mission &amp; Vision
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Skills &amp; Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="navbar--content"
            >
              Contact              
            </Link>
          </li>
        </ul>
      </div>
      <h6></h6>
      <div>
      <button type="submit" class="btn btn-outline-primary" onClick={() => {navigate("/Login")}}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;

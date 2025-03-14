import React, { useState, useEffect } from "react";
import logo from "./../../../assets/images/logo-main.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [bodyClass, setBodyClass] = useState("");
  useEffect(() => {
    if (bodyClass) {
      document.body.classList.add(bodyClass);
    }
    return () => {
      if (bodyClass) {
        document.body.classList.remove(bodyClass);
      }
    };
  }, [bodyClass]);
  const handleButtonClick = () => {
    setBodyClass((prevClass) => (prevClass === "active" ? "" : "active"));
  };
  return (
    <>
      <header className="theme-1">
        <div className="header__upper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="header__upper--left">
                  <div className="d-none d-lg-block logo">
                    <Link to={"/"}>
                      <img src={logo} alt="Site Logo" />
                    </Link>
                  </div>
                  <div className="d-block d-lg-none logo w-49px">
                    <Link to={"/"}>
                      <img src={logo} alt="Site Logo" />
                    </Link>
                  </div>

                  <button
                    type="button"
                    className="nav-toggle-btn a-nav-toggle ms-auto d-block d-lg-none"
                    aria-label="toggle-nav"
                    onClick={handleButtonClick}
                  >
                    <span className="nav-toggle nav-toggle-sm">
                      <span className="stick stick-1"></span>
                      <span className="stick stick-2"></span>
                      <span className="stick stick-3"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__lower">
          <div className="container">
            <div className="row">
              <div className="d-none d-lg-block col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item active">
                        <Link to={"/"} className="nav-link dropdown-toggle">
                          <i className="fas fa-home"></i>Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/about"} className="nav-link">
                          <i className="fas fa-exclamation-circle"></i>About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/vehicles"} className="nav-link">
                          <i className="fas fa-taxi"></i>Our Vehicles
                        </Link>
                      </li>
                    </ul>
                    <div className="my-2 my-lg-0 d-inline-flex">
                      <Link to={"/login"} className="button button-light big">
                        Login
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={`responsive-menu ${bodyClass}`}>
        <div className="rep-header">
          <div className="logo">
            <a href="/">
              <img src={logo} width="122" height="32" alt="Site Logo" />
            </a>
          </div>
          <a href="#" className="close-menu" onClick={handleButtonClick}>
            <i className="lni lni-close"></i>
          </a>
        </div>
        <div className="navbar-collapse" id="navbarSupportedContent1">
          <ul className="mobile-menu navbar-nav me-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <i className="fas fa-home"></i>
                Home
                <span className="sr-only">(current)</span>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="/">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="index-2.html">
                    Home 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="index-3.html">
                    Home 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                <i className="fas fa-exclamation-circle"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="our-services.html">
                <i className="fas fa-cog"></i>Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="our-vehicles.html">
                <i className="fas fa-taxi"></i>Our Vehicles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="packages.html">
                <i className="fas fa-cube"></i>Packages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">
                <i className="fas fa-book-open"></i>
                Blog
                <span className="sr-only">(current)</span>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="blog.html">
                    {" "}
                    Blog Page{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="blog-single-post.html">
                    Blog Post
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us.html">
                <i className="fas fa-map-marker-alt"></i>
                Contact
              </a>
            </li>
          </ul>
          <div className="header__upper--right flex-column">
            <nav className="navigation p-3">
              <ul>
                <li>
                  <a href="my-driver-dashboard.html">Driver Dashboard</a>
                </li>
              </ul>
            </nav>
            <a href="sign-up.html" className="button p-3">
              <i className="far fa-user-astronaut"></i> Drive with us
            </a>
            <a href="ride-with-carrgo.html" className="button p-3 my-2">
              <i className="far fa-taxi"></i> Book a Ride
            </a>
            <div className="p-3 my-lg-0 d-inline-flex">
              <a href="sign-in.html" className="button button-light big">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

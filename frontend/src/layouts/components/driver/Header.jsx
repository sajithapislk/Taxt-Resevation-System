import React, { useState, useEffect } from "react";
import logo from "./../../../assets/images/logo-main.webp";
import partner from "./../../../assets/images/partner-img.webp";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);
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
      <header className="theme-2">
        <div className="header__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="header__upper--left">
                  <div className="d-none d-lg-block logo">
                    <a href="/">
                      <img src={logo} alt="Site Logo" />
                    </a>
                  </div>
                  <div className="d-block d-lg-none logo w-49px">
                    <a href="/">
                      <img src={logo} alt="Site Logo" />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="nav-toggle-btn a-nav-toggle ms-auto d-block d-lg-none"
                  >
                    <span className="nav-toggle nav-toggle-sm">
                      <span className="stick stick-1"></span>
                      <span className="stick stick-2"></span>
                      <span className="stick stick-3"></span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="d-none d-lg-block col-lg-2">
                <div className="header__upper--right">
                  <nav className="navigation">
                    <ul></ul>
                  </nav>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      as="a"
                      className="dropdown-toggle d-flex align-items-center"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="media">
                        <img
                          height="30"
                          width="30"
                          className="me-3"
                          src={partner}
                          alt="Partner"
                        />
                        <div className="media-body">
                          <h6 className="m-0">
                            {user.name} <i className="fas fa-angle-down"></i>
                          </h6>
                        </div>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="end">
                      <Dropdown.Item href="/logout">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="responsive-menu">
        <div className="rep-header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Site Logo" />
            </a>
          </div>
          <a href="#" className="close-menu">
            <i className="lni lni-close"></i>
          </a>
        </div>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="mobile-menu navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <div className="media">
                  <img height="30" width="30" className="me-3" src={partner} />
                  <div className="media-body">
                    <h6 className="m-0">
                      John Doe <i className="fas fa-angle-down"></i>
                    </h6>
                    <p className="m-0">India</p>
                  </div>
                </div>
                <span className="sr-only">(current)</span>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="partner-profile.html">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="media">
                  <div className="media-body">
                    <h3 className="m-0">Passenger</h3>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="on-ride.html">
                    On Ride
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="passenger-profile.html">
                    Passenger
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="ride-with-carrgo.html">
                    Ride with Cargo
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="ride-with-carrgo-booked.html"
                  >
                    Ride with Cargo Booked
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="media">
                  <div className="media-body">
                    <h3 className="m-0">Driver</h3>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="partner-profile.html">
                    Partner Profile
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="media">
                  <div className="media-body">
                    <h3 className="m-0">Login</h3>
                  </div>
                </div>
              </a>
              <ul>
                <li>
                  <a className="dropdown-item" href="sign-in.html">
                    Sign In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="sign-up.html">
                    Sign up
                  </a>
                </li>
              </ul>
            </li>
            <li className="m-0">
              <a href="contact-us.html">Help</a>
            </li>
            <li className="m-0">
              <a href="contact-us.html">
                <i className="far fa-envelope"></i>
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
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import logo from "./../../../assets/images/logo.webp";
import appleLogo from "./../../../assets/images/icon/apple-store.webp";
import googlePlayLogo from "./../../../assets/images/icon/google-play.webp";
const Footer = () => {
  return (
    <footer className="footer-div theme-1">
      <div className="footer-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-nav-div div-padding theme-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-brand">
                <a href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="footer-text pe-lg-3">
                <p className="mb-4">
                  Nulla justo neque, tincidunt id bibendum a, rhoncus et eros.
                  Vestibulum commodo diam ut risus pulvinar consequat vitae a
                  dui. Vivamus sed molestie diam. Maecenas vitae enim lacus.
                </p>
              </div>
              <div className="helpline">
                <h3 className="mb-0">
                  Toll Free <span>Helpline</span>
                </h3>
                <p className="mb-0">(+1) 123 4567 890</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4>Useful links</h4>
              <nav className="footer-navigation">
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="our-vehicles.html">Our vehicles</a>
                  </li>
                  <li>
                    <a href="our-services.html">Services</a>
                  </li>
                  <li>
                    <a href="packages.html">Packages</a>
                  </li>
                  <li>
                    <a href="sign-in.html">Login</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Register</a>
                  </li>
                  <li>
                    <a href="index.html">Latest News</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="ride-with-carrgo.html">Ride</a>
                  </li>
                  <li>
                    <a href="my-driver-dashboard.html">Drive</a>
                  </li>
                  <li>
                    <a href="sign-up.html">Become a Driver</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4>Head Office</h4>
              <address className="company-address">
                <p className="m-b-20">
                  15 Street No, Ox Building,
                  <span className="d-block">Near Station, 1356.</span>
                </p>
                <p className="m-b-8">Phone number: (+1) 123 4567 890</p>
                <p className="m-b-8">
                  Email Address:{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="ce8dafbcbca9a18ea9a3afa7a2e0ada1a3"
                  >
                    [email&#160;protected]
                  </a>
                </p>
                <p className="m-b-8">
                  Fax :{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="65360017130c06002506041717020a4b060a08"
                  >
                    [email&#160;protected]
                  </a>
                </p>
              </address>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h4>Download Mobile App</h4>
              <div className="app-download-box">
                <a href="#">
                  <img
                    src={googlePlayLogo}
                    alt="Google play"
                  />
                </a>
                <a href="#">
                  <img
                    src={appleLogo}
                    alt="Apple store"
                  />
                </a>
              </div>
              <div className="cta-button">
                <a
                  href="my-driver-dashboard.html"
                  className="button button-light big"
                >
                  Become a Driver
                </a>
                <a href="ride-with-carrgo.html" className="button button-black big">
                  Ride with CarrGo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>
                &copy; Copyright 2024 by Texi Service. All Right Reserved.
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="social-nav">
                <li>
                  <a href="#" className="facebook" aria-label="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter" aria-label="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="instagram" aria-label="instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="google-p" aria-label="google">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin" aria-label="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="pinterest" aria-label="pinterest">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="google-map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

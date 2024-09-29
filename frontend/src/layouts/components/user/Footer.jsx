import logo from "./../../../assets/images/logo.webp";
import appleLogo from "./../../../assets/images/icon/apple-store.webp";
import googlePlayLogo from "./../../../assets/images/icon/google-play.webp";
const Footer = () => {
  return (
    <footer className="theme-2">
    <div className="footer-nav-div div-padding theme-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-brand">
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <ul className="social-nav">
                        <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="instagram"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" className="google-p"><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <div className="app-download-box">
                        <a href="#"><img src={googlePlayLogo} alt="Google play" /></a>
                        <a href="#"><img src={appleLogo} alt="Apple store" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-div theme-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <p>&copy; Copyright 2024 by Texi Service. All Right Reserved.</p>
                </div>
                <div className="col-lg-6">
                    <ul className="social-nav">
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;

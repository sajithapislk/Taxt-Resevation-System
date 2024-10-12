import React, { useState } from "react";
import download1 from "./../../../../assets/images/download-1.webp";
import download2 from "./../../../../assets/images/download-2.webp";
import bgVideo2 from "./../../../../assets/bg-video-2.mp4";
import UserService from "./../../../../services/UserService";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [takeRide, setTakeRide] = useState(true);
  const [rideForm, setRideForm] = useState({
    name: "",
    mobileNo: "",
    email: "",
  });
  const [driveForm, setDriveForm] = useState({
    name: "",
    mobileNo: "",
    email: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (isTakeRide) => {
    setTakeRide(isTakeRide);
    setFormMessage(""); // Reset form message on tab change
  };

  // Handle input changes
  const handleInputChange = (formType, e) => {
    const { name, value } = e.target;
    formType === "ride"
      ? setRideForm({ ...rideForm, [name]: value })
      : setDriveForm({ ...driveForm, [name]: value });
  };

  // Form submit handler
  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    setLoading(true);
    setFormMessage("");

    const formData = formType === "ride" ? rideForm : driveForm;

    try {
      const response =
        (await formData) === "ride"
          ? UserService.DriverRegister(formData)
          : UserService.UserRegister(formData);
      setFormMessage("Form submitted successfully!");
      setTimeout(() => {
        navigate("/login"); // Adjust this path as needed
      }, 2000);
    } catch (error) {
      setFormMessage("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero-area-v-2 p-0 dark-overlay-3">
      <video autoPlay muted loop id="myVideo" width="100%">
        <source src={bgVideo2} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="hero-area-wrap">
              <div className="hero-area-left">
                <h1 className="hero-title-v-2">
                  <span className="hero-title-bg">
                    Earn.{" "}
                    <span className="hero-title-accent-v-2">Connect.</span>
                    <span>Contribute to Society.</span>
                  </span>
                </h1>
                <p className="hero-text">
                  Partner with us to drive your own livelihood and more.Partner
                  with us to drive your own livelihood and more.
                </p>
                <div className="download-buttons">
                  <a href="#" aria-label="download-apple-btn">
                    <img src={download1} alt="Download on Apple Store" />
                  </a>
                  <a href="#" aria-label="download-android-btn">
                    <img src={download2} alt="Download on Android Store" />
                  </a>
                </div>
              </div>
              <div className="hero-area-right">
                <div className="combine-form">
                  <nav className="navigation">
                    <div className="nav nav-tabs form-tab" role="tablist">
                      <button
                        className={`nav-link ${takeRide ? "active" : ""}`}
                        id="nav-ride-tab"
                        type="button"
                        role="tab"
                        aria-controls="nav-ride"
                        aria-selected={takeRide ? "true" : "false"}
                        onClick={() => handleButtonClick(true)}
                      >
                        <i className="fas fa-car"></i> Take a Ride
                      </button>
                      <button
                        className={`nav-link ${!takeRide ? "active" : ""}`}
                        id="nav-drive-tab"
                        type="button"
                        role="tab"
                        aria-controls="nav-drive"
                        aria-selected={!takeRide ? "true" : "false"}
                        onClick={() => handleButtonClick(false)}
                      >
                        <i className="far fa-steering-wheel"></i> Apply to Drive
                      </button>
                    </div>
                  </nav>

                  <div className="tab-content">
                    {/* Take a Ride Form */}
                    <div
                      className={`tab-pane fade ${
                        takeRide ? "show active" : ""
                      }`}
                      id="nav-ride"
                      role="tabpanel"
                      aria-labelledby="nav-ride-tab"
                    >
                      <form
                        onSubmit={(e) => handleSubmit(e, "ride")}
                        className="form1"
                      >
                        <h2 className="form-title">
                          Get member exclusive rewards
                        </h2>

                        <div className="row">
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Full Name"
                              value={rideForm.name}
                              onChange={(e) => handleInputChange("ride", e)}
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="tel"
                              className="form-control"
                              name="mobileNo"
                              placeholder="Mobile No"
                              value={rideForm.mobileNo}
                              onChange={(e) => handleInputChange("ride", e)}
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email Address"
                              value={rideForm.email}
                              onChange={(e) => handleInputChange("ride", e)}
                            />
                          </div>

                          <div className="form-group col-12">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              value={rideForm.password}
                              onChange={(e) => handleInputChange("ride", e)}
                            />
                          </div>

                          <div className="col-12 form-group mt-3">
                            <input type="checkbox" id="agree" />
                            <label htmlFor="agree">
                              I agree to the
                              <a href="terms.html">Terms and Conditions</a> and
                              <a href="privacy.html">Privacy Policy</a>
                            </label>
                          </div>
                          <div className="form-btn col-12">
                            <button
                              className="form-button button button-dark big"
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Sign up to Ride"}
                            </button>
                        <p className="form-messages mb-0 mt-3">{formMessage}asd s ad dsa</p>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* Apply to Drive Form */}
                    <div
                      className={`tab-pane fade ${
                        !takeRide ? "show active" : ""
                      }`}
                      id="nav-drive"
                      role="tabpanel"
                      aria-labelledby="nav-drive-tab"
                    >
                      <form
                        onSubmit={(e) => handleSubmit(e, "drive")}
                        className="form1"
                      >
                        <h2 className="form-title">
                          Start driving now and get paid
                        </h2>

                        <div className="row">
                          <div className="form-group col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="First Name"
                              value={driveForm.name}
                              onChange={(e) => handleInputChange("drive", e)}
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              name="mobileNo"
                              placeholder="Phone mobileNo"
                              value={driveForm.mobileNo}
                              onChange={(e) => handleInputChange("drive", e)}
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email Address"
                              value={driveForm.email}
                              onChange={(e) => handleInputChange("drive", e)}
                            />
                          </div>
                          <div className="form-group col-12">
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              placeholder="Password"
                              value={driveForm.password}
                              onChange={(e) => handleInputChange("drive", e)}
                            />
                          </div>
                          <div className="col-12 form-group mt-3">
                            <input type="checkbox" id="agree2" />
                            <label htmlFor="agree2">
                              I agree to the
                              <a href="terms.html">Terms and Conditions</a> and
                              <a href="privacy.html">Privacy Policy</a>
                            </label>
                          </div>
                          <div className="form-btn col-12">
                            <button
                              className="form-button button button-dark big"
                              disabled={loading}
                            >
                              {loading ? "Submitting..." : "Become a Driver"}
                            </button>
                          </div>
                        </div>
                        <p className="form-messages mb-0 mt-3">{formMessage}</p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

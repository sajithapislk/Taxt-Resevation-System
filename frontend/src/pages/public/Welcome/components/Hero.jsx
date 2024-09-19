import download1 from "./../../../../assets/images/download-1.webp";
import download2 from "./../../../../assets/images/download-2.webp";
import bgVideo2 from "./../../../../assets/bg-video-2.mp4";
function Hero() {
    return(
        <section className="hero-area-v-2 p-0 dark-overlay-3">
        <video autoPlay muted loop id="myVideo" width="100">
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
                      Earn. <span className="hero-title-accent-v-2">Connect.</span>
                      <span>Contribute to Society.</span>
                    </span>
                  </h1>
                  <p className="hero-text">
                    Partner with us to drive your own livelihood and
                    more.Partner with us to drive your own livelihood and more.
                  </p>
                  <div className="download-buttons">
                    <a href="#" aria-label="download-apple-btn">
                      <img src={download1} />
                    </a>
                    <a href="#" aria-label="download-android-btn">
                      <img src={download2} />
                    </a>
                  </div>
                </div>
                <div className="hero-area-right">
                  <div className="combine-form">
                    <nav className="navigation">
                      <div className="nav nav-tabs form-tab" role="tablist">
                        <button
                          className="nav-link"
                          id="nav-ride-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-ride"
                          type="button"
                          role="tab"
                          aria-controls="nav-ride"
                          aria-selected="false"
                        >
                          <i className="fas fa-car"></i> Take a Ride
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-drive-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-drive"
                          type="button"
                          role="tab"
                          aria-controls="nav-drive"
                          aria-selected="true"
                        >
                          <i className="far fa-steering-wheel"></i> Apply to Drive
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade"
                        id="nav-ride"
                        role="tabpanel"
                        aria-labelledby="nav-ride-tab"
                      >
                        <form action="#" className="form1">
                          <h2 className="form-title">
                            Get member exclusive rewards
                          </h2>
                          <p className="form-text">
                            Egestas sed vulputate eleifend ac adipiscing
                            quisque. Hac vulputate integer sapien et.
                          </p>
                          <div className="row">
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="text"
                                className="form-control"
                                name="location"
                                id="location"
                                placeholder="City"
                              />
                            </div>
                            <div className="col-12 form-group mt-3">
                              <input type="checkbox" id="agree" />
                              <label htmlFor="agree">
                                I agree to the
                                <a href="terms.html">
                                  Terms and Conditions
                                </a>{" "}
                                and
                                <a href="privacy.html">Privacy Policy</a>
                              </label>
                            </div>
                            <div className="form-btn col-12">
                              <button className="form-button button button-dark big">
                                Sign up to Ride
                              </button>
                            </div>
                          </div>
                          <p className="form-messages mb-0 mt-3"></p>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-drive"
                        role="tabpanel"
                        aria-labelledby="nav-drive-tab"
                      >
                        <form action="#" className="form1">
                          <h2 className="form-title">
                            Start driving now and get paid
                          </h2>
                          <p className="form-text">
                            Egestas sed vulputate eleifend ac adipiscing
                            quisque. Hac vulputate integer sapien et.
                          </p>
                          <div className="row">
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                id="firstName2"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                id="lastName2"
                                placeholder="Last Name"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="number"
                                className="form-control"
                                name="number"
                                id="number2"
                                placeholder="Phone Number"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email2"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="form-group col-12">
                              <input
                                type="text"
                                className="form-control"
                                name="location"
                                id="location2"
                                placeholder="City"
                              />
                            </div>
                            <div className="col-12 form-group mt-3">
                              <input type="checkbox" id="agree2" />
                              <label htmlFor="agree2">
                                I agree to the
                                <a href="terms.html">
                                  Terms and Conditions
                                </a>{" "}
                                and
                                <a href="privacy.html">Privacy Policy</a>
                              </label>
                            </div>
                            <div className="form-btn col-12">
                              <button className="form-button button button-dark big">
                                Become a Driver
                              </button>
                            </div>
                          </div>
                          <p className="form-messages mb-0 mt-3"></p>
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
    )
}
export default Hero;
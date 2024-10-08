import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./../../services/AuthService"; // Assuming this is your axios service

const Login = () => {
  const [activeTab, setActiveTab] = useState("rider"); // To handle active tab (Rider/Driver)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false); // To handle loading state
  const [errorMessage, setErrorMessage] = useState(""); // To handle error messages
  const [successMessage, setSuccessMessage] = useState(""); // To handle success messages

  // Handle tab switch between "Rider" and "Driver"
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setErrorMessage(""); // Reset messages when switching tabs
    setSuccessMessage("");
  };

  // Handle input changes in the form
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Define the payload for form submission
    const payload = {
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
    };

    try {
      if (type === "driver") {
        const response = await AuthService.DriverLogin(payload);
      } else if (type === "user") {
        const response = await AuthService.UserLogin(payload);
      } else if (type === "admin") {
        const response = await AuthService.AdminLogin(payload);
      }
      setSuccessMessage(`Successfully logged in as ${activeTab}!`);
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="div-padding p-t-0 signin-div user-access-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="account-access sign-in">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  role="presentation"
                  className={activeTab === "rider" ? "active" : ""}
                >
                  <a
                    href="#rider"
                    className={activeTab === "rider" ? "active" : ""}
                    aria-controls="rider"
                    role="tab"
                    onClick={() => handleTabChange("rider")}
                  >
                    Rider
                  </a>
                </li>
                <li
                  role="presentation"
                  className={activeTab === "driver" ? "active" : ""}
                >
                  <a
                    href="#driver"
                    className={activeTab === "driver" ? "active" : ""}
                    aria-controls="driver"
                    role="tab"
                    onClick={() => handleTabChange("driver")}
                  >
                    Driver
                  </a>
                </li>
                <li
                  role="presentation"
                  className={activeTab === "admin" ? "active" : ""}
                >
                  <a
                    href="#driver"
                    className={activeTab === "admin" ? "active" : ""}
                    aria-controls="admin"
                    role="tab"
                    onClick={() => handleTabChange("admin")}
                  >
                    Admin
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                {/* Rider Login Form */}
                <div
                  className={`tab-pane ${
                    activeTab === "rider" ? "active" : ""
                  }`}
                  id="rider"
                  role="tabpanel"
                >
                  <form
                    className="mb-4"
                    onSubmit={(e) => handleSubmit(e, "rider")}
                  >
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />{" "}
                        Remember me
                      </label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-dark"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </form>
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-success">{successMessage}</p>
                  )}
                  <p className="acclink">
                    Don't have an account? <a href="sign-up.html">Sign up</a>
                  </p>
                  <div className="externel-signup">
                    <a href="#" className="btn-block google">
                      <i className="fab fa-google"></i> Sign up with Google
                    </a>
                  </div>
                </div>

                {/* Driver Login Form */}
                <div
                  className={`tab-pane ${
                    activeTab === "driver" ? "active" : ""
                  }`}
                  id="driver"
                  role="tabpanel"
                >
                  <form
                    className="mb-4"
                    onSubmit={(e) => handleSubmit(e, "driver")}
                  >
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />{" "}
                        Remember me
                      </label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-dark"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </form>
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-success">{successMessage}</p>
                  )}
                </div>

                {/* Admin Login Form */}
                <div
                  className={`tab-pane ${
                    activeTab === "admin" ? "active" : ""
                  }`}
                  id="admin"
                  role="tabpanel"
                >
                  <form
                    className="mb-4"
                    onSubmit={(e) => handleSubmit(e, "admin")}
                  >
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input
                          type="checkbox"
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                        />{" "}
                        Remember me
                      </label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-dark"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </form>
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-success">{successMessage}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

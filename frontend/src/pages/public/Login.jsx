import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('rider');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted for ${activeTab}:`, formData);
    // Add form submission logic here
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
                <li role="presentation" className={activeTab === 'rider' ? 'active' : ''}>
                  <a
                    href="#rider"
                    className={activeTab === 'rider' ? 'active' : ''}
                    aria-controls="rider"
                    role="tab"
                    onClick={() => handleTabChange('rider')}
                  >
                    Rider
                  </a>
                </li>
                <li role="presentation" className={activeTab === 'driver' ? 'active' : ''}>
                  <a
                    href="#driver"
                    className={activeTab === 'driver' ? 'active' : ''}
                    aria-controls="driver"
                    role="tab"
                    onClick={() => handleTabChange('driver')}
                  >
                    Driver
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className={`tab-pane ${activeTab === 'rider' ? 'active' : ''}`} id="rider">
                  <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
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
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" id="rememberMe" checked={formData.rememberMe} onChange={handleChange} /> Remember me
                      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-dark" type="submit">
                      Sign in
                    </button>
                  </form>
                  <p className="acclink">
                    Don't have an account? <a href="sign-up.html">Sign up <i className="icofont">double_right</i></a>
                  </p>
                  <div className="externel-signup">
                    <a href="#" className="btn-block facebook">
                      <i className="fab fa-facebook-f"></i> Sign up with Facebook
                    </a>
                    <a href="#" className="btn-block google">
                      <i className="fab fa-google"></i> Sign up with Google
                    </a>
                  </div>
                </div>
                <div role="tabpanel" className={`tab-pane ${activeTab === 'driver' ? 'active' : ''}`} id="driver">
                  <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
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
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                      <label>
                        <input type="checkbox" id="rememberMe" checked={formData.rememberMe} onChange={handleChange} /> Remember me
                      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-dark" type="submit">
                      Sign in
                    </button>
                  </form>
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

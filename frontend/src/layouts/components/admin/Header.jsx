const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon bi bi-list"></div>
        <div
          className="search-toggle-icon bi bi-search"
          data-toggle="header_search"
        ></div>
        <div className="header-search">
          <form>
            <div className="form-group mb-0">
              <i className="dw dw-search2 search-icon"></i>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search Here"
              />
              <div className="dropdown">
                <a
                  className="dropdown-toggle no-arrow"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="ion-arrow-down-c"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      From
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      To
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">
                      Subject
                    </label>
                    <div className="col-sm-12 col-md-10">
                      <input
                        className="form-control form-control-sm form-control-line"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="header-right">
        <div className="dashboard-setting user-notification">
          <div className="dropdown">
            <a
              className="dropdown-toggle no-arrow"
              href="javascript:;"
              data-toggle="right-sidebar"
            >
              <i className="dw dw-settings2"></i>
            </a>
          </div>
        </div>
        <div className="user-notification">
          <div className="dropdown">
            <a
              className="dropdown-toggle no-arrow"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <i className="icon-copy dw dw-notification"></i>
              <span className="badge notification-active"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="notification-list mx-h-350 customscroll mCustomScrollbar _mCS_1 mCS_no_scrollbar">
                <div
                  id="mCSB_1"
                  className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
                  style={{ maxHeight: "0px" }}
                  tabindex="0"
                >
                  <div
                    id="mCSB_1_container"
                    className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                    style={{ position: "relative", top: "0", left: "0" }}
                    dir="ltr"
                  >
                    <ul>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/img.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>John Doe</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/photo1.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>Lea R. Frith</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/photo2.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>Erik L. Richards</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/photo3.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>John Doe</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/photo4.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>Renee I. Hansen</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src="vendors/images/img.jpg"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          <h3>Vicki M. Coleman</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed...
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="mCSB_1_scrollbar_vertical"
                    className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
                    style={{ display: "none" }}
                  >
                    <div className="mCSB_draggerContainer">
                      <div
                        id="mCSB_1_dragger_vertical"
                        className="mCSB_dragger"
                        style={{
                          position: "absolute",
                          minHeight: "30px",
                          top: "0px",
                        }}
                      >
                        <div
                          className="mCSB_dragger_bar"
                          style={{ lineHeight: "30px" }}
                        ></div>
                      </div>
                      <div className="mCSB_draggerRail"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-info-dropdown">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
            >
              <span className="user-icon">
                <img src="vendors/images/photo1.jpg" alt="" />
              </span>
              <span className="user-name">Ross C. Lopez</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
              <a className="dropdown-item" href="profile.html">
                <i className="dw dw-user1"></i> Profile
              </a>
              <a className="dropdown-item" href="profile.html">
                <i className="dw dw-settings2"></i> Setting
              </a>
              <a className="dropdown-item" href="faq.html">
                <i className="dw dw-help"></i> Help
              </a>
              <a className="dropdown-item" href="login.html">
                <i className="dw dw-logout"></i> Log Out
              </a>
            </div>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/dropways/deskapp" target="_blank">
            <img src="vendors/images/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;

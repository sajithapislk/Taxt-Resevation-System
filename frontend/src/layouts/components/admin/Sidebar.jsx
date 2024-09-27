import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-title">
          <h3 className="weight-600 font-16 text-blue">
            Layout Settings
            <span className="btn-block font-weight-400 font-12">
              User Interface Settings
            </span>
          </h3>
          <div className="close-sidebar" data-toggle="right-sidebar-close">
            <i className="icon-copy ion-close-round"></i>
          </div>
        </div>
        <div className="right-sidebar-body customscroll mCustomScrollbar _mCS_2">
          <div
            id="mCSB_2"
            className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
            tabIndex="0"
            style={{ maxHeight: "none" }}
          >
            <div
              id="mCSB_2_container"
              className="mCSB_container"
              style={{ position: "relative", top: "0", left: "0" }}
              dir="ltr"
            >
              <div className="right-sidebar-body-content">
                <h4 className="weight-600 font-18 pb-10">Header Background</h4>
                <div className="sidebar-btn-group pb-30 mb-10">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-primary header-white active"
                  >
                    White
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-primary header-dark"
                  >
                    Dark
                  </a>
                </div>

                <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
                <div className="sidebar-btn-group pb-30 mb-10">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-primary sidebar-light active"
                  >
                    White
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-outline-primary sidebar-dark"
                  >
                    Dark
                  </a>
                </div>

                <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
                <div className="sidebar-radio-group pb-10 mb-10">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebaricon-1"
                      name="menu-dropdown-icon"
                      className="custom-control-input"
                      value="icon-style-1"
                      checked=""
                    />
                    <label className="custom-control-label" htmlFor="sidebaricon-1">
                      <i className="fa fa-angle-down"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebaricon-2"
                      name="menu-dropdown-icon"
                      className="custom-control-input"
                      value="icon-style-2"
                    />
                    <label className="custom-control-label" htmlFor="sidebaricon-2">
                      <i className="ion-plus-round"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebaricon-3"
                      name="menu-dropdown-icon"
                      className="custom-control-input"
                      value="icon-style-3"
                    />
                    <label className="custom-control-label" htmlFor="sidebaricon-3">
                      <i className="fa fa-angle-double-right"></i>
                    </label>
                  </div>
                </div>

                <h4 className="weight-600 font-18 pb-10">Menu List Icon</h4>
                <div className="sidebar-radio-group pb-30 mb-10">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-1"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-1"
                      checked=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-1"
                    >
                      <i className="ion-minus-round"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-2"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-2"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-2"
                    >
                      <i className="fa fa-circle-o" aria-hidden="true"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-3"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-3"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-3"
                    >
                      <i className="dw dw-check"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-4"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-4"
                      checked=""
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-4"
                    >
                      <i className="icon-copy dw dw-next-2"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-5"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-5"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-5"
                    >
                      <i className="dw dw-fast-forward-1"></i>
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="sidebariconlist-6"
                      name="menu-list-icon"
                      className="custom-control-input"
                      value="icon-list-style-6"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="sidebariconlist-6"
                    >
                      <i className="dw dw-next"></i>
                    </label>
                  </div>
                </div>

                <div className="reset-options pt-30 text-center">
                  <button className="btn btn-danger" id="reset-settings">
                    Reset Settings
                  </button>
                </div>
              </div>
            </div>
            <div
              id="mCSB_2_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_2_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
              style={{ display: "block" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_2_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: "30px",
                    display: "block",
                    height: "115px",
                    maxHeight: "256px",
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
      <div className="left-side-bar">
        <div className="brand-logo">
          <a href="index.html">
            <img
              src="vendors/images/deskapp-logo.svg"
              alt=""
              className="dark-logo"
            />
            <img
              src="vendors/images/deskapp-logo-white.svg"
              alt=""
              className="light-logo"
            />
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round"></i>
          </div>
        </div>
        <div className="menu-block customscroll mCustomScrollbar _mCS_3">
          <div
            id="mCSB_3"
            className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
            tabIndex="0"
            style={{ maxHeight: "none" }}
          >
            <div
              id="mCSB_3_container"
              className="mCSB_container"
              style={{ position: "relative", top: "0", left: "0" }}
              dir="ltr"
            >
              <div className="sidebar-menu icon-style-1 icon-list-style-1">
                <ul id="accordion-menu">
                  <li className="dropdown show">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="on"
                    >
                     <span>Admin Dashboard</span>
                    </a>
                    <ul className="submenu" style={{ display: "block" }}>
                      <li>
                        {/* <a href="index.html">Dashboard</a> */}
                        <Link to="/admin/dashboard" className="">DashBoard</Link>
                        <Link to="/admin/user" className="">User</Link>
                        <Link to="/admin/booking" className="">Booking</Link>
                        <Link to="/admin/vehiclecategory" className="">Vehicle Category</Link>
                        <Link to="/admin/payment" className="">Payments</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-textarea-resize"></span>
                      <span className="mtext">Forms</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="form-basic.html">Form Basic</a>
                      </li>
                      <li>
                        <a href="advanced-components.html">
                          Advanced Components
                        </a>
                      </li>
                      <li>
                        <a href="form-wizard.html">Form Wizard</a>
                      </li>
                      <li>
                        <a href="html5-editor.html">HTML5 Editor</a>
                      </li>
                      <li>
                        <a href="form-pickers.html">Form Pickers</a>
                      </li>
                      <li>
                        <a href="image-cropper.html">Image Cropper</a>
                      </li>
                      <li>
                        <a href="image-dropzone.html">Image Dropzone</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-table"></span>
                      <span className="mtext">Tables</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="basic-table.html">Basic Tables</a>
                      </li>
                      <li>
                        <a href="datatable.html">DataTables</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="calendar.html"
                      className="dropdown-toggle no-arrow"
                    >
                      <span className="micon bi bi-calendar4-week"></span>
                      <span className="mtext">Calendar</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-archive"></span>
                      <span className="mtext"> UI Elements </span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-cards.html">Cards</a>
                      </li>
                      <li>
                        <a href="ui-cards-hover.html">Cards Hover</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-tabs.html">Tabs</a>
                      </li>
                      <li>
                        <a href="ui-tooltip-popover.html">
                          Tooltip &amp; Popover
                        </a>
                      </li>
                      <li>
                        <a href="ui-sweet-alert.html">Sweet Alert</a>
                      </li>
                      <li>
                        <a href="ui-notification.html">Notification</a>
                      </li>
                      <li>
                        <a href="ui-timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="ui-progressbar.html">Progressbar</a>
                      </li>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-list-group.html">List group</a>
                      </li>
                      <li>
                        <a href="ui-range-slider.html">Range slider</a>
                      </li>
                      <li>
                        <a href="ui-carousel.html">Carousel</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-command"></span>
                      <span className="mtext">Icons</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="bootstrap-icon.html">Bootstrap Icons</a>
                      </li>
                      <li>
                        <a href="font-awesome.html">FontAwesome Icons</a>
                      </li>
                      <li>
                        <a href="foundation.html">Foundation Icons</a>
                      </li>
                      <li>
                        <a href="ionicons.html">Ionicons Icons</a>
                      </li>
                      <li>
                        <a href="themify.html">Themify Icons</a>
                      </li>
                      <li>
                        <a href="custom-icon.html">Custom Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-pie-chart"></span>
                      <span className="mtext">Charts</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="highchart.html">Highchart</a>
                      </li>
                      <li>
                        <a href="knob-chart.html">jQuery Knob</a>
                      </li>
                      <li>
                        <a href="jvectormap.html">jvectormap</a>
                      </li>
                      <li>
                        <a href="apexcharts.html">Apexcharts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-file-earmark-text"></span>
                      <span className="mtext">Additional Pages</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="video-player.html">Video Player</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">Forgot Password</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset Password</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-bug"></span>
                      <span className="mtext">Error Pages</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="400.html">400</a>
                      </li>
                      <li>
                        <a href="403.html">403</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="500.html">500</a>
                      </li>
                      <li>
                        <a href="503.html">503</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-back"></span>
                      <span className="mtext">Extra Pages</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="blank.html">Blank</a>
                      </li>
                      <li>
                        <a href="contact-directory.html">Contact Directory</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-detail.html">Blog Detail</a>
                      </li>
                      <li>
                        <a href="product.html">Product</a>
                      </li>
                      <li>
                        <a href="product-detail.html">Product Detail</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="pricing-table.html">Pricing Tables</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-hdd-stack"></span>
                      <span className="mtext">Multi Level Menu</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                      <li className="dropdown">
                        <a
                          href="javascript:;"
                          className="dropdown-toggle"
                          data-option="off"
                        >
                          <span className="micon fa fa-plug"></span>
                          <span className="mtext">Level 2</span>
                        </a>
                        <ul className="submenu child">
                          <li>
                            <a href="javascript:;">Level 2</a>
                          </li>
                          <li>
                            <a href="javascript:;">Level 2</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                      <li>
                        <a href="javascript:;">Level 1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="sitemap.html" className="dropdown-toggle no-arrow">
                      <span className="micon bi bi-diagram-3"></span>
                      <span className="mtext">Sitemap</span>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html" className="dropdown-toggle no-arrow">
                      <span className="micon bi bi-chat-right-dots"></span>
                      <span className="mtext">Chat</span>
                    </a>
                  </li>
                  <li>
                    <a href="invoice.html" className="dropdown-toggle no-arrow">
                      <span className="micon bi bi-receipt-cutoff"></span>
                      <span className="mtext">Invoice</span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider"></div>
                  </li>
                  <li>
                    <div className="sidebar-small-cap">Extra</div>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-option="off"
                    >
                      <span className="micon bi bi-file-pdf"></span>
                      <span className="mtext">Documentation</span>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="introduction.html">Introduction</a>
                      </li>
                      <li>
                        <a href="getting-started.html">Getting Started</a>
                      </li>
                      <li>
                        <a href="color-settings.html">Color Settings</a>
                      </li>
                      <li>
                        <a href="third-party-plugins.html">
                          Third Party Plugins
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="https://dropways.github.io/deskapp-free-single-page-website-template/"
                      target="_blank"
                      className="dropdown-toggle no-arrow"
                    >
                      <span className="micon bi bi-layout-text-window-reverse"></span>
                      <span className="mtext">
                        Landing Page
                        <img
                          src="vendors/images/coming-soon.png"
                          alt=""
                          width="25"
                          className="mCS_img_loaded"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              id="mCSB_3_scrollbar_vertical"
              className="mCSB_scrollTools mCSB_3_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
              style={{ display: "block" }}
            >
              <div className="mCSB_draggerContainer">
                <div
                  id="mCSB_3_dragger_vertical"
                  className="mCSB_dragger"
                  style={{
                    position: "absolute",
                    minHeight: "30px",
                    display: "block",
                    height: "56px",
                    maxHeight: "244px",
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
    </>
  );
};
export default Sidebar;

import Breadcrumb from "./components/Breadcrumb";
import partner from "./../../assets/images/partner-img.webp";
import messenger1 from './../../assets/images/messenger/1.webp';
import images21 from './../../assets/images/21.webp';
import ourVehicles21 from './../../assets/images/21_our_vehicles.webp';
import ourVehicles22 from './../../assets/images/22_our_vehicles.webp';
import ourVehicles23 from './../../assets/images/23_our_vehicles.webp';
import vehicle1 from './../../assets/images/dashboard/vehicle-1.webp';

function TakeRide() {
  return (
    <>
      <Breadcrumb title="Let's Ride" path="Ride with Carrgo" />
      <div className="div-padding driver-dashboard-div">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="passanger-name">
                        <div className="media">
                            <img className="me-3" src={partner} alt="partner-img" />
                            <div className="media-body">
                                <h2 className="mt-0">Johnson Smith</h2>
                                <p>ID 1234567890</p>
                                <a href="#">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 right-text">
                    <h2>Partnership with CarrGo</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tab-dashboard">
                        <ul className="nav nav-tabs tab-navigation" role="tablist">
                            <li role="presentation" className="active">
                                <a href="#dashboard" aria-controls="dashboard" className="active" role="tab"
                                    data-toggle="tab">Dashboard</a>
                            </li>
                            <li role="presentation" className="active">
                                <a href="#info" aria-controls="info" role="tab" data-toggle="tab">Personal
                                    Information</a>
                            </li>
                            <li role="presentation">
                                <a href="#message" aria-controls="message" role="tab" data-toggle="tab">Message</a>
                            </li>
                            <li role="presentation">
                                <a href="#vehicles" aria-controls="vehicles" role="tab" data-toggle="tab">Vehicles</a>
                            </li>
                            <li role="presentation">
                                <a href="#drivers" aria-controls="drivers" role="tab" data-toggle="tab">Drivers</a>
                            </li>
                            <li role="presentation">
                                <a href="#rides" aria-controls="rides" role="tab" data-toggle="tab">Rides</a>
                            </li>
                            <li role="presentation">
                                <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="dashboard">
                                <div className="dashboard-info">
                                    <div className="ride-chart small-div">
                                        <h4>Ride From the day</h4>
                                        <div className="small-div-item">
                                            <div id="ride-chart"></div>
                                        </div>
                                    </div>
                                    <div className="overview-counter small-div">
                                        <h4>Overview</h4>
                                        <div className="counter-wrapper bg-gray small-div-item">
                                            <div className="single-counter-box">
                                                <h2 className="counter-number">18445</h2>
                                                <p className="counter-text">Total Rides</p>
                                            </div>
                                            <div className="single-counter-box">
                                                <h2 className="counter-number">21785</h2>
                                                <p className="counter-text">Total Passengers</p>
                                            </div>
                                            <div className="single-counter-box">
                                                <h2 className="counter-number">150</h2>
                                                <p className="counter-text">Drivers</p>
                                            </div>
                                            <div className="single-counter-box">
                                                <h2 className="counter-number">75</h2>
                                                <p className="counter-text">Today Rides</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="earning-details small-div">
                                        <h4>Total earnings of last month</h4>
                                        <div className="total-earning-table table-responsive small-div-item">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name of Cabs</th>
                                                        <th scope="col">Earnigns</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Drivers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">BMW 5 <small>“4976ART RU”</small></th>
                                                        <td>$337.29</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Johnson Smith</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Audi <small>“4876ORT AU”</small></th>
                                                        <td>$856.56</td>
                                                        <td>May 11, 2018</td>
                                                        <td>John Doe</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Alto XL <small>“4865ART KU”</small></th>
                                                        <td>$186.00</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Rock William</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Swift Dezire <small>“9856BRU PO”</small></th>
                                                        <td>$847.25</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Jassica</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">BMW 5 <small>“4976ART RU”</small></th>
                                                        <td>$1337.29</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Elly Smith</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Tesia <small>“68946KUY UK”</small></th>
                                                        <td>$869.29</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Stone Gold</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Audi 8 <small>“4976ART RU”</small></th>
                                                        <td>$537.29</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Rock</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Honda City XL <small>“8766ART TU”</small></th>
                                                        <td>$225.50</td>
                                                        <td>May 11, 2018</td>
                                                        <td>Johnson Doe</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Alto XL <small>“3589PMT MB”</small></th>
                                                        <td>$100.00</td>
                                                        <td>May 11, 2018</td>
                                                        <td>John William</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <a href="#" className="button button-dark">View More</a>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="info">
                                <div className="personal-info small-div">
                                    <div className="div-heading">
                                        <h4 className="heading-item heading-item-1">Personal Information</h4>
                                        <p className="heading-item heading-item-2 right">
                                            <a href="#" className="edit-btn"><i className="fas fa-edit"></i> Edit</a>
                                        </p>
                                    </div>
                                    <div className="personal-details small-div-item">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputFirstName">First Name</label>
                                                    <input type="text" className="form-control text-muted"
                                                        id="inputFirstName" readOnly value="John" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputLastName">Last Name</label>
                                                    <input type="text" className="form-control text-muted"
                                                        id="inputLastName" readOnly value="Doe" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail">Your Email</label>
                                                    <input type="text" className="form-control text-muted" id="inputEmail"
                                                        readOnly value="johndoe@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputWebsite">Your Website</label>
                                                    <input type="text" className="form-control text-muted" id="inputWebsite"
                                                        readOnly value="www.johndoe.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputBirthday">Your Birthday</label>
                                                    <input type="text" className="form-control text-muted"
                                                        id="inputBirthday" readOnly value="01 June 1984" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputPhoneNumber">Your Phone Number</label>
                                                    <input type="text" className="form-control text-muted"
                                                        id="inputPhoneNumber" readOnly value="+91 - 123 456 7890" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputGender">Your Gender</label>
                                                    <input type="text" className="form-control text-muted" id="inputGender"
                                                        readOnly value="Male" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="inputStatus">Status</label>
                                                    <input type="text" className="form-control text-muted" id="inputStatus"
                                                        readOnly value="Married" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="inputDesc">Write a little description about you</label>
                                                    <textarea className="form-control text-muted" id="inputDesc"
                                                        readOnly defaultValue="Vestibulum suscipit faucibus dolor, vitae mollis justo consequat vel. Vestibulum in nisi ut neque tristique accumsan vel eu eros. Quisque pellentesque urna et hendrerit lacinia. Mauris vitae tellus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in placerat tortor, sit amet dictum sem. Donec et orci condimentum eros pulvinar maximus. Suspendisse accumsan imperdiet mauris vitae tincidunt. Donec imperdiet purus eget diam tristique vestibulum. Vestibulum posuere placerat lacus commodo sollicitudin. Nullam eget justo fermentum, rhoncus leo eget, viverra augue. Fusce odio odio, egestas id turpis at, faucibus consectetur nulla. Sed vel volutpat ligula, quis vulputate odio. Sed condimentum, neque nec aliquam sodales, dolor erat euismod erat, porta venenatis odio leo non dolor. Donec ut lacus non quam convallis sodales."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="message">
                                <h4>Messages</h4>
                                <div className="message-box small-div">
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="event-msg-left">
                                                <ul className="list-group">
                                                    <li className="list-group-item msg-single ">
                                                        <div className="sidebar-heading">
                                                            <h4>Messages</h4>
                                                        </div>
                                                        <div className="event-sideber-search">
                                                            <form action="#" method="post" className="search-form">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Search" />
                                                                <i className="fa fa-search"></i>
                                                            </form>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">John</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Rock</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Johnson</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Smith</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Akash</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item msg-single">
                                                        <div className="media">
                                                            <img className="me-3 img-fluid"
                                                                src={messenger1}
                                                                alt="placeholder image" />
                                                            <div className="media-body">
                                                                <h5 className="mt-0">Akash</h5>
                                                                <p className="mb-0">Cras sed sodales enim...</p>
                                                                <p>
                                                                    <small>4 Hour ago</small>
                                                                </p>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="event-chat-ryt">
                                                <ul className="list-group">
                                                    <li className="list-group-item">
                                                        <div className="media">
                                                            <div className="media-img">
                                                                <img className="me-3 img-fluid"
                                                                    src={messenger1}
                                                                    alt="placeholder image" />
                                                            </div>
                                                            <div className="media-body">
                                                                <h3 className="mb-0">John</h3>
                                                                <p>Online</p>
                                                            </div>
                                                            <div className="phone-icon">
                                                                <a href="#"><i className="fas fa-phone"></i></a>
                                                            </div>
                                                            <div className="dropdown custom-dropdown">
                                                                <div data-toggle="dropdown">
                                                                    <i className="fa fa-ellipsis-v msg-btn"></i>
                                                                </div>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a className="dropdown-item" href="#">Option 1</a>
                                                                    <a className="dropdown-item" href="#">Option 2</a>
                                                                    <a className="dropdown-item" href="#">Option 3</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="char-area">
                                                            <div className="chat-reciver">
                                                                <div className="media">
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet.</p>
                                                                    </div>
                                                                    <img className="ms-3"
                                                                        src={messenger1} alt="user" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-sender">
                                                                <div className="media">
                                                                    <img className="me-3"
                                                                        src={messenger1} alt="user" />
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. Magni, saepe.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chat-reciver">
                                                                <div className="media">
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. Eos, aperiam.</p>
                                                                    </div>
                                                                    <img className="ms-3"
                                                                        src={messenger1} alt="user" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-sender">
                                                                <div className="media">
                                                                    <img className="me-3"
                                                                        src={messenger1} alt="user" />
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur,
                                                                            adipisicing elit. Praesentium, sequi aliquid
                                                                            saepe hic alias optio?</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chat-reciver">
                                                                <div className="media">
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. Eos, aperiam.</p>
                                                                    </div>
                                                                    <img className="ms-3"
                                                                        src={messenger1} alt="user" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-sender">
                                                                <div className="media">
                                                                    <img className="me-3"
                                                                        src={messenger1} alt="user" />
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur,
                                                                            adipisicing elit. Praesentium, sequi aliquid
                                                                            saepe hic alias optio?</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="chat-reciver">
                                                                <div className="media">
                                                                    <div className="media-body">
                                                                        <p>Lorem ipsum dolor sit amet consectetur
                                                                            adipisicing elit. Eos, aperiam.</p>
                                                                    </div>
                                                                    <img className="ms-3"
                                                                        src={messenger1} alt="user" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="char-type">
                                                            <form className="d-flex justify-content-center" action="#"
                                                                method="post">
                                                                <input type="text" className="form-control"
                                                                    placeholder="Type Here..." />
                                                                <button className="button button-dark">SEND</button>
                                                            </form>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="vehicles">
                                <div className="vahicles-container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h4>My vehicles</h4>
                                        </div>
                                        <div className="col-lg-6 text-end">
                                            <a href="#" className="button button-dark">Register New Vehicle</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={vehicle1} alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles21} alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles22}alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles23} alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src="assets/images/dashboard/vehicle-1.webp" alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles21} alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles22} alt="Vehicle" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-sm-6">
                                            <div className="single-vehicle-container">
                                                <img src={ourVehicles23} alt="Vehicle" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="drivers">
                                <div className="drivers-info">
                                    <h4>Drivers</h4>
                                    <div className="row small-div">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top"
                                                        src="assets/images/dashboard/driver-1.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top"
                                                        src="assets/images/14_my_driver_dashboard_my_drivers.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src="assets/images/15.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src="assets/images/16.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src="assets/images/15.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src="assets/images/19.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src="assets/images/20.webp"
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-driver">
                                                <div className="card">
                                                    <img className="card-img-top" src={images21}
                                                        alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h4 className="card-title">John Smith</h4>
                                                        <p className="card-text">(+1) 123 456 7890</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="rides">
                                <div className="rides-details">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h4>Rides</h4>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="rides-filter">
                                                <ul>
                                                    <li>
                                                        <a href="#">Yesterday</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Last Week</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Last Month</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Last 6 Month</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Last Year</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row small-div">
                                        <div className="col-lg-12">
                                            <div className="total-earning-table table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name of Cabs</th>
                                                            <th scope="col">Earnigns</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Passengers</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">BMW 5 <small>“4976ART RU”</small></th>
                                                            <td>$337.29</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Johnson Smith</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Audi <small>“4876ORT AU”</small></th>
                                                            <td>$856.56</td>
                                                            <td>May 11, 2018</td>
                                                            <td>John Doe</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Alto XL <small>“4865ART KU”</small></th>
                                                            <td>$186.00</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Rock William</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Swift Dezire <small>“9856BRU PO”</small>
                                                            </th>
                                                            <td>$847.25</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Jassica</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">BMW 5 <small>“4976ART RU”</small></th>
                                                            <td>$1337.29</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Elly Smith</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Tesia <small>“68946KUY UK”</small></th>
                                                            <td>$869.29</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Stone Gold</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Audi 8 <small>“4976ART RU”</small></th>
                                                            <td>$537.29</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Rock</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Honda City XL <small>“8766ART TU”</small>
                                                            </th>
                                                            <td>$225.50</td>
                                                            <td>May 11, 2018</td>
                                                            <td>Johnson Doe</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Alto XL <small>“3589PMT MB”</small></th>
                                                            <td>$100.00</td>
                                                            <td>May 11, 2018</td>
                                                            <td>John William</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="text-center">
                                                <a href="#" className="button button-dark">View More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="settings">
                                <div className="personal-info">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h4>Personal Information</h4>
                                        </div>
                                        <div className="col-lg-6 text-end">
                                            <a href="#"><i className="fas fa-edit"></i> Edit</a>
                                        </div>
                                    </div>
                                    <div className="personal-details">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" className="form-control text-muted" id="firstName"
                                                        value="John" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" className="form-control text-muted" id="lastName"
                                                        value="Doe" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="yourEmail">Your Email</label>
                                                    <input type="text" className="form-control text-muted" id="yourEmail"
                                                        value="johndoe@gmail.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="yourWebsite">Your Website</label>
                                                    <input type="text" className="form-control text-muted" id="yourWebsite"
                                                        value="www.johndoe.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="yourBirthday">Your Birthday</label>
                                                    <input type="text" className="form-control text-muted" id="yourBirthday"
                                                        value="01 June 1984" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="phoneNumber">Your Phone Number</label>
                                                    <input type="text" className="form-control text-muted" id="phoneNumber"
                                                        value="+91 - 123 456 7890" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="yourGender">Your Gender</label>
                                                    <input type="text" className="form-control text-muted" id="yourGender"
                                                        value="Male" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="yourStatus">Status</label>
                                                    <input type="text" className="form-control text-muted" id="yourStatus"
                                                        value="Married" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label htmlFor="aboutDesc">Write a little description about you</label>
                                                    <textarea className="form-control text-muted"
                                                        id="aboutDesc" defaultValue="Vestibulum suscipit faucibus dolor, vitae mollis justo consequat vel. Vestibulum in nisi ut neque tristique accumsan vel eu eros. Quisque pellentesque urna et hendrerit lacinia. Mauris vitae tellus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in placerat tortor, sit amet dictum sem. Donec et orci condimentum eros pulvinar maximus. Suspendisse accumsan imperdiet mauris vitae tincidunt. Donec imperdiet purus eget diam tristique vestibulum. Vestibulum posuere placerat lacus commodo sollicitudin. Nullam eget justo fermentum, rhoncus leo eget, viverra augue. Fusce odio odio, egestas id turpis at, faucibus consectetur nulla. Sed vel volutpat ligula, quis vulputate odio. Sed condimentum, neque nec aliquam sodales, dolor erat euismod erat, porta venenatis odio leo non dolor. Donec ut lacus non quam convallis sodales."></textarea>
                                                </div>
                                                <a href="#" className="button button-dark">Save</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default TakeRide;

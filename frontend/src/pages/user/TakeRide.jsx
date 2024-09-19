import Breadcrumb from "./components/Breadcrumb";
import car1 from "./../../assets/images/dashboard/car-1.webp";
import car2 from "./../../assets/images/dashboard/car-2.webp";
import car3 from "./../../assets/images/dashboard/car-3.webp";
import car4 from "./../../assets/images/dashboard/car-4.webp";
import car5 from "./../../assets/images/dashboard/car-5.webp";

function TakeRide() {
  return (
    <>
      <Breadcrumb title="Let's Ride" path="Ride with Carrgo" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="booking-form">
                        <form action="#">
                            <div className="from-group destination">
                                <label for="inputFrom">From</label>
                                <i className="fas fa-map-marker-alt"></i>
                                <input type="text" name="frominputDestination" placeholder="Select Pickup"
                                    id="inputFrom" className="form-control" />
                            </div>
                            <div className="from-group destination">
                                <label for="inputDestination">Where to?</label>
                                <i className="fas fa-map-marker-alt"></i>
                                <input type="text" name="desctination" placeholder="Select Destination"
                                    id="inputDestination" className="form-control" />
                            </div>
                            <div className="payment-options-wrapper">
                                <h2>Payment Method</h2>
                                <div className="from-group payment-options">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="payment-opts" id="cash-pay"
                                            value="option1" />
                                        <label className="form-check-label" for="cash-pay">Cash</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="payment-opts"
                                            id="banking-pay" value="option2" />
                                        <label className="form-check-label" for="banking-pay">Net Banking</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="payment-opts" id="card-pay"
                                            value="option3" />
                                        <label className="form-check-label" for="card-pay">Debit Card</label>
                                    </div>
                                </div>
                            </div>
                            <div className="select-car-wrapper">
                                <h2>Selected Car</h2>
                                <div className="selected-car">
                                    <div className="from-group car-options">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="car-opts" id="scooter"
                                                value="option1" />
                                            <label className="form-check-label" for="scooter">
                                                <img src={car1} alt="car" />
                                            </label>
                                            <div className="car-details">
                                                <h4>1x</h4>
                                                <p>Scooter</p>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="car-opts" id="alto"
                                                value="option2" />
                                            <label className="form-check-label" for="alto">
                                                <img src={car2} alt="Car" />
                                            </label>
                                            <div className="car-details">
                                                <h4>2x</h4>
                                                <p>Alto</p>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="car-opts" id="swift"
                                                value="option3" />
                                            <label className="form-check-label" for="swift">
                                                <img src={car3} alt="Car" />
                                            </label>
                                            <div className="car-details">
                                                <h4>3x</h4>
                                                <p>Swift dzire</p>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="car-opts" id="luxury"
                                                value="option3" />
                                            <label className="form-check-label" for="luxury">
                                                <img src={car4} alt="Car" />
                                            </label>
                                            <div className="car-details">
                                                <h4>4x</h4>
                                                <p>Luxury</p>
                                            </div>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="car-opts" id="tourist"
                                                value="option3" />
                                            <label className="form-check-label" for="tourist">
                                                <img src={car5} alt="Car" />
                                            </label>
                                            <div className="car-details">
                                                <h4>5x</h4>
                                                <p>Tourist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="button button-dark">Book Now</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="ride-map-area">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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

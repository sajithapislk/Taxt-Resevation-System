import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Breadcrumb from "./components/Breadcrumb";
import car1 from "./../../assets/images/dashboard/car-1.webp";
import car2 from "./../../assets/images/dashboard/car-2.webp";
import car3 from "./../../assets/images/dashboard/car-3.webp";
import car4 from "./../../assets/images/dashboard/car-4.webp";
import car5 from "./../../assets/images/dashboard/car-5.webp";

const _googleMapsApiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
const libraries = ["places"];

function TakeRide() {
  console.log(import.meta.env);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCP6SvRsh7Ba3lOFKEjRxX6dZqkwH6U7H0",
    libraries,
  });

  const [pickupCoords, setPickupCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const pickupRef = useRef();
  const destinationRef = useRef();

  const handlePickupPlaceSelect = useCallback(() => {
    const place = pickupRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setPickupCoords({ lat, lng });
    }
  }, []);

  const handleDestinationPlaceSelect = useCallback(() => {
    const place = destinationRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setDestinationCoords({ lat, lng });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (pickupCoords && destinationCoords) {
        setDirectionsResponse(null); // Reset directions for a new calculation
      }
    },
    [pickupCoords, destinationCoords]
  );

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Breadcrumb title="Let's Ride" path="Ride with Carrgo" />
      <div className="div-padding our-vehicles-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="booking-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group destination">
                    <label htmlFor="inputFrom">From</label>
                    <Autocomplete
                      onLoad={(autoc) => (pickupRef.current = autoc)}
                      onPlaceChanged={handlePickupPlaceSelect}
                    >
                      <input
                        type="text"
                        id="inputFrom"
                        className="form-control"
                        placeholder="Select Pickup"
                      />
                    </Autocomplete>
                  </div>
                  <div className="form-group destination">
                    <label htmlFor="inputDestination">Where to?</label>
                    <Autocomplete
                      onLoad={(autoc) => (destinationRef.current = autoc)}
                      onPlaceChanged={handleDestinationPlaceSelect}
                    >
                      <input
                        type="text"
                        id="inputDestination"
                        className="form-control"
                        placeholder="Select Destination"
                      />
                    </Autocomplete>
                  </div>
                  <div className="select-car-wrapper">
                    <h2>Selected Car</h2>
                    <div className="selected-car">
                      <div className="from-group car-options">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="scooter"
                            value="option1"
                          />
                          <label className="form-check-label" htmlFor="scooter">
                            <img src={car1} alt="car" />
                          </label>
                          <div className="car-details">
                            <h4>1x</h4>
                            <p>Scooter</p>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="alto"
                            value="option2"
                          />
                          <label className="form-check-label" htmlFor="alto">
                            <img src={car2} alt="Car" />
                          </label>
                          <div className="car-details">
                            <h4>2x</h4>
                            <p>Alto</p>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="swift"
                            value="option3"
                          />
                          <label className="form-check-label" htmlFor="swift">
                            <img src={car3} alt="Car" />
                          </label>
                          <div className="car-details">
                            <h4>3x</h4>
                            <p>Swift dzire</p>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="luxury"
                            value="option3"
                          />
                          <label className="form-check-label" htmlFor="luxury">
                            <img src={car4} alt="Car" />
                          </label>
                          <div className="car-details">
                            <h4>4x</h4>
                            <p>Luxury</p>
                          </div>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="tourist"
                            value="option3"
                          />
                          <label className="form-check-label" htmlFor="tourist">
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
                  <button type="submit" className="button button-dark">
                    Show Route
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ride-map-area">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={{ lat: 40.7128, lng: -74.006 }}
                  zoom={14}
                >
                  {pickupCoords && (
                    <Marker position={pickupCoords} label="Pickup" />
                  )}
                  {destinationCoords && (
                    <Marker position={destinationCoords} label="Destination" />
                  )}
                  {pickupCoords && destinationCoords && !directionsResponse && (
                    <DirectionsService
                      options={{
                        origin: pickupCoords,
                        destination: destinationCoords,
                        travelMode: window.google.maps.TravelMode.DRIVING,
                      }}
                      callback={(response) => {
                        if (response && response.status === "OK") {
                          setDirectionsResponse(response);
                        } else {
                          console.error("Directions request failed");
                        }
                      }}
                    />
                  )}
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TakeRide;

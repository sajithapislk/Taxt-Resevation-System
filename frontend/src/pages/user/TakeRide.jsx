import React, { useState,useEffect, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Breadcrumb from "./components/Breadcrumb";

import VehicleTypeService from './../../services/user/VehicleTypeService';

const _googleMapsApiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
const libraries = ["places"];

function TakeRide() {  
  const [vehicleTypeList, setVehicleTypeList] = useState([]);

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

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const res = await VehicleTypeService.List();
      console.log(res);
      if (!res.error) {
        setVehicleTypeList(res);
      } else {
        console.error(res.error); 
      }
    };

    fetchVehicleTypes();
  }, []);

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
                    <h2>Selected Vehicle</h2>
                    <div className="selected-car">
                      <div className="from-group car-options">
                      {vehicleTypeList.map((item, index) => (
                        <div className="form-check form-check-inline"  key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id="scooter"
                            value="option1"
                          />
                          <label className="form-check-label" htmlFor="scooter">
                            <img src={item.image} alt="car" />
                          </label>
                          <div className="car-details">
                            <h6>{item.vehicleCount}</h6>
                            <p>{item.name}</p>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="button button-dark">
                    Next
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

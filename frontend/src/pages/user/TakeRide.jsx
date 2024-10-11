import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Breadcrumb from "./components/Breadcrumb";
import VehicleTypeService from "./../../services/user/VehicleTypeService";

const libraries = ["places"];
const _googleMapsApiKey =
  import.meta.env.GOOGLE_MAP_API_KEY ||
  "AIzaSyCP6SvRsh7Ba3lOFKEjRxX6dZqkwH6U7H0";

function TakeRide() {
  const navigate = useNavigate();
  const [vehicleTypeList, setVehicleTypeList] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: _googleMapsApiKey,
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
      const placeName =
        place.formatted_address || place.name || "Unknown Place";

      setPickupCoords({ lat, lng });
      setFormData((prevData) => ({
        ...prevData,
        pickUpPlace: placeName,
        pickUpLongitude: lng,
        pickUpLatitude: lat,
      }));
    }
  }, []);

  const handleDestinationPlaceSelect = useCallback(() => {
    const place = destinationRef.current?.getPlace();
    if (place && place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const placeName =
        place.formatted_address || place.name || "Unknown Place";

      setDestinationCoords({ lat, lng });
      setFormData((prevData) => ({
        ...prevData,
        dropOffPlace: placeName,
        dropOffLongitude: lng,
        dropOffLatitude: lat,
      }));
    }
  }, []);

  const [formData, setFormData] = useState({
    vehicleTypeId: "",
    userId: "",
    pickUpPlace: "",
    pickUpLongitude: "",
    pickUpLatitude: "",
    dropOffPlace: "",
    dropOffLongitude: "",
    dropOffLatitude: "",
  });

  const handleSubmit = () => {
    navigate("/user/available-driver", { state: { formData } });
  };

  useEffect(() => {
    const checkAuth = async () => {
      const userData = localStorage.getItem("user");
      const user = JSON.parse(userData);
      
      setFormData((prevData) => ({
        ...prevData,
        userId: user.id,
      }));
    }
    const fetchVehicleTypes = async () => {
      const res = await VehicleTypeService.List();
      console.log(res);
      if (!res.error) {
        setVehicleTypeList(res);
      } else {
        console.error(res.error);
      }
    };
    checkAuth();
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
                
              <div className="select-car-wrapper">
                  <h2>Selected Vehicle</h2>
                  <div className="selected-car">
                    <div className="form-group car-options">
                      {vehicleTypeList.map((item) => (
                        <div
                          className="form-check form-check-inline"
                          key={item.id}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="car-opts"
                            id={`vehicle-${item.id}`} // Unique ID for each input
                            value={item.id}
                            onChange={() =>
                              setFormData((prevData) => ({
                                ...prevData,
                                vehicleTypeId: item.id,
                              }))
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`vehicle-${item.id}`}
                          >
                            <img src={item.image} alt={item.name} />
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
                <button
                  type="submit"
                  className="button button-dark"
                  onClick={handleSubmit}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ride-map-area">
                <GoogleMap
                  mapContainerStyle={{ width: "100%", height: "400px" }}
                  center={{ lat: 7.2945453, lng: 80.6257814 }}
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

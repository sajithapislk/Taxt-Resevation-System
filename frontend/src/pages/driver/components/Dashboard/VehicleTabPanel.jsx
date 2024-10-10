import VehicleService from "../../../../services/driver/VehicleService";
import ourVehicles21 from "./../../../../assets/images/21_our_vehicles.webp";
import ourVehicles22 from "./../../../../assets/images/22_our_vehicles.webp";
import ourVehicles23 from "./../../../../assets/images/23_our_vehicles.webp";
import vehicle1 from "./../../../../assets/images/dashboard/vehicle-1.webp";
import React, { useState, useEffect } from "react";

function TabPanel4() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const res = await VehicleService.List();
      setVehicles(res);
      if (!res.error) {
        setVehicles(res);
      } else {
        console.error(res.error);
      }
    };

    fetchVehicles();
  }, []);
  return (
    <>
      <div className="vehicles-container">
        <div className="row">
          <div className="col-lg-6">
            <h4>My Vehicles</h4>
          </div>
        </div>
        <div className="row">
          {/* Displaying vehicle images */}
          {vehicles.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="single-vehicle-container">
                <img src={item.image} alt={`Vehicle ${item.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TabPanel4;
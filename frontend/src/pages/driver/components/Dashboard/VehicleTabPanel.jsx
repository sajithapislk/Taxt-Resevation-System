import ourVehicles21 from "./../../../../assets/images/21_our_vehicles.webp";
import ourVehicles22 from "./../../../../assets/images/22_our_vehicles.webp";
import ourVehicles23 from "./../../../../assets/images/23_our_vehicles.webp";
import vehicle1 from "./../../../../assets/images/dashboard/vehicle-1.webp";
function TabPanel4() {

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
          {[vehicle1, ourVehicles21, ourVehicles22, ourVehicles23].map((image, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="single-vehicle-container">
                <img src={image} alt={`Vehicle ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TabPanel4;
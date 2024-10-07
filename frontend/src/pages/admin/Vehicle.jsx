import React, {useEffect,useState} from 'react'
import VehicleService from '../../services/admin/VehicleService';

const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([]);
  
  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const res = await VehicleService.List();
      console.log(res);
      if (!res.error) {
        setVehicleList(res);
      } else {
        console.error(res.error);
      }
    };

    fetchVehicleTypes();
  }, []);
  return (
    <div class="main-container">
      <div class="pd-ltr-20 xs-pd-20-10">
        <div class="min-height-200px">
        <div class="page-header">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="title">
                  <h4>Vehicle</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Vehicle
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="col-md-6 col-sm-12 text-right">   
              </div>
            </div>
          </div>
          <div class="pd-20 card-box mb-30">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vehicle Number</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
              {vehicleList.map((item) => (
                <tr key={item.id}>
                  <td>{item.Id}</td>
                  <td>{item.VehicleNumber}</td>
                  <td>{item.Description}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicle
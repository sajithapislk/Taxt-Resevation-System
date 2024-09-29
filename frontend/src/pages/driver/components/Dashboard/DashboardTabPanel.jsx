function TabPanel1() {
  return (
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
                <th scope="row">
                  BMW 5 <small>“4976ART RU”</small>
                </th>
                <td>$337.29</td>
                <td>May 11, 2018</td>
                <td>Johnson Smith</td>
              </tr>
              <tr>
                <th scope="row">
                  Audi <small>“4876ORT AU”</small>
                </th>
                <td>$856.56</td>
                <td>May 11, 2018</td>
                <td>John Doe</td>
              </tr>
              <tr>
                <th scope="row">
                  Alto XL <small>“4865ART KU”</small>
                </th>
                <td>$186.00</td>
                <td>May 11, 2018</td>
                <td>Rock William</td>
              </tr>
              <tr>
                <th scope="row">
                  Swift Dezire <small>“9856BRU PO”</small>
                </th>
                <td>$847.25</td>
                <td>May 11, 2018</td>
                <td>Jassica</td>
              </tr>
              <tr>
                <th scope="row">
                  BMW 5 <small>“4976ART RU”</small>
                </th>
                <td>$1337.29</td>
                <td>May 11, 2018</td>
                <td>Elly Smith</td>
              </tr>
              <tr>
                <th scope="row">
                  Tesia <small>“68946KUY UK”</small>
                </th>
                <td>$869.29</td>
                <td>May 11, 2018</td>
                <td>Stone Gold</td>
              </tr>
              <tr>
                <th scope="row">
                  Audi 8 <small>“4976ART RU”</small>
                </th>
                <td>$537.29</td>
                <td>May 11, 2018</td>
                <td>Rock</td>
              </tr>
              <tr>
                <th scope="row">
                  Honda City XL <small>“8766ART TU”</small>
                </th>
                <td>$225.50</td>
                <td>May 11, 2018</td>
                <td>Johnson Doe</td>
              </tr>
              <tr>
                <th scope="row">
                  Alto XL <small>“3589PMT MB”</small>
                </th>
                <td>$100.00</td>
                <td>May 11, 2018</td>
                <td>John William</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default TabPanel1;
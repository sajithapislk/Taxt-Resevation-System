function TabPanel6() {
  return (
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
          <div className="text-center">
            <a href="#" className="button button-dark">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabPanel6;

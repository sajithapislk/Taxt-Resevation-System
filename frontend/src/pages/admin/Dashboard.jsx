const AdminDashboard = () => {
  return (
    <div class="main-container">
      <div class="pd-ltr-20 xs-pd-20-10">
        <div class="min-height-200px">
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

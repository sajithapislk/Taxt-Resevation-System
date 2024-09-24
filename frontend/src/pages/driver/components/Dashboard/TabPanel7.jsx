function TabPanel7() {
  return (
    <div className="personal-info">
      <div className="row">
        <div className="col-lg-6">
          <h4>Personal Information</h4>
        </div>
        <div className="col-lg-6 text-end">
          <a href="#">
            <i className="fas fa-edit"></i> Edit
          </a>
        </div>
      </div>
      <div className="personal-details">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control text-muted"
                id="firstName"
                value="John"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control text-muted"
                id="lastName"
                value="Doe"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="yourEmail">Your Email</label>
              <input
                type="text"
                className="form-control text-muted"
                id="yourEmail"
                value="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="yourWebsite">Your Website</label>
              <input
                type="text"
                className="form-control text-muted"
                id="yourWebsite"
                value="www.johndoe.com"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="yourBirthday">Your Birthday</label>
              <input
                type="text"
                className="form-control text-muted"
                id="yourBirthday"
                value="01 June 1984"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="phoneNumber">Your Phone Number</label>
              <input
                type="text"
                className="form-control text-muted"
                id="phoneNumber"
                value="+91 - 123 456 7890"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="yourGender">Your Gender</label>
              <input
                type="text"
                className="form-control text-muted"
                id="yourGender"
                value="Male"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="yourStatus">Status</label>
              <input
                type="text"
                className="form-control text-muted"
                id="yourStatus"
                value="Married"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="aboutDesc">
                Write a little description about you
              </label>
              <textarea
                className="form-control text-muted"
                id="aboutDesc"
                defaultValue="Vestibulum suscipit faucibus dolor, vitae mollis justo consequat vel. Vestibulum in nisi ut neque tristique accumsan vel eu eros. Quisque pellentesque urna et hendrerit lacinia. Mauris vitae tellus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in placerat tortor, sit amet dictum sem. Donec et orci condimentum eros pulvinar maximus. Suspendisse accumsan imperdiet mauris vitae tincidunt. Donec imperdiet purus eget diam tristique vestibulum. Vestibulum posuere placerat lacus commodo sollicitudin. Nullam eget justo fermentum, rhoncus leo eget, viverra augue. Fusce odio odio, egestas id turpis at, faucibus consectetur nulla. Sed vel volutpat ligula, quis vulputate odio. Sed condimentum, neque nec aliquam sodales, dolor erat euismod erat, porta venenatis odio leo non dolor. Donec ut lacus non quam convallis sodales."
              ></textarea>
            </div>
            <a href="#" className="button button-dark">
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabPanel7;

function TabPanel2() {
  return (
    <div className="personal-info small-div">
      <div className="div-heading">
        <h4 className="heading-item heading-item-1">Personal Information</h4>
        <p className="heading-item heading-item-2 right">
          <a href="#" className="edit-btn">
            <i className="fas fa-edit"></i> Edit
          </a>
        </p>
      </div>
      <div className="personal-details small-div-item">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputFirstName">First Name</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputFirstName"
                readOnly
                value="John"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputLastName">Last Name</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputLastName"
                readOnly
                value="Doe"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputEmail">Your Email</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputEmail"
                readOnly
                value="johndoe@gmail.com"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputWebsite">Your Website</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputWebsite"
                readOnly
                value="www.johndoe.com"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputBirthday">Your Birthday</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputBirthday"
                readOnly
                value="01 June 1984"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputPhoneNumber">Your Phone Number</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputPhoneNumber"
                readOnly
                value="+91 - 123 456 7890"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputGender">Your Gender</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputGender"
                readOnly
                value="Male"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="inputStatus">Status</label>
              <input
                type="text"
                className="form-control text-muted"
                id="inputStatus"
                readOnly
                value="Married"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="inputDesc">
                Write a little description about you
              </label>
              <textarea
                className="form-control text-muted"
                id="inputDesc"
                readOnly
                defaultValue="Vestibulum suscipit faucibus dolor, vitae mollis justo consequat vel. Vestibulum in nisi ut neque tristique accumsan vel eu eros. Quisque pellentesque urna et hendrerit lacinia. Mauris vitae tellus neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec in placerat tortor, sit amet dictum sem. Donec et orci condimentum eros pulvinar maximus. Suspendisse accumsan imperdiet mauris vitae tincidunt. Donec imperdiet purus eget diam tristique vestibulum. Vestibulum posuere placerat lacus commodo sollicitudin. Nullam eget justo fermentum, rhoncus leo eget, viverra augue. Fusce odio odio, egestas id turpis at, faucibus consectetur nulla. Sed vel volutpat ligula, quis vulputate odio. Sed condimentum, neque nec aliquam sodales, dolor erat euismod erat, porta venenatis odio leo non dolor. Donec ut lacus non quam convallis sodales."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabPanel2;

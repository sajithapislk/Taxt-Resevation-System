// About.jsx
const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="display-4 mb-4">About Us</h1>
          <p className="lead text-muted mb-4">
            We are a passionate team dedicated to providing the best solutions for your needs. Our mission is to
            deliver high-quality services that help you achieve your goals.
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="About Us"
            className="img-fluid rounded mb-4"
          />
          <p className="mb-4">
            Our team consists of highly skilled developers, designers, and strategists who are committed to
            delivering top-notch products. We believe in innovation, collaboration, and integrity, and we strive to
            exceed expectations in every project we undertake.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="row mt-5">
        <div className="col-lg-12 text-center">
          <h2 className="mb-4">Meet the Team</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Team Member 1"
            />
            <div className="card-body">
              <h5 className="card-title">Jane Doe</h5>
              <p className="card-text">Lead Developer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Team Member 2"
            />
            <div className="card-body">
              <h5 className="card-title">John Smith</h5>
              <p className="card-text">UI/UX Designer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100 border-0 shadow">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Team Member 3"
            />
            <div className="card-body">
              <h5 className="card-title">Emily Johnson</h5>
              <p className="card-text">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

import logo1 from "./../../../../assets/images/icon/1.webp";
import logo2 from "./../../../../assets/images/icon/2.webp";
import logo3 from "./../../../../assets/images/icon/3.webp";
import logo4 from "./../../../../assets/images/icon/4.webp";
function HowWorkArea() {
  return (
    <section className="div-padding how-work-area">
      <div className="container">
        <div className="row content-wrapper">
          <div className="col-12 col-lg-6 left-content">
            <div>
              <h2 className="how-it-works-title pb-4">How It Works</h2>
              <p className="how-it-works-text">
             <b>Book a Ride:</b>  Simply enter your pick-up and drop-off locations in the app or website, and select the vehicle that fits your needs.

<b>Get Matched with a Driver:</b> Once you've confirmed your booking, Carrgo instantly matches you with a nearby driver for a quick and convenient ride.

<b>Track Your Ride:</b> Stay updated with real-time tracking, knowing exactly when your driver will arrive and following your trip as it happens.

<b>Enjoy Your Journey:</b> Sit back and relax in our well-maintained vehicles while our professional drivers ensure a safe and comfortable ride to your destination.

<b>Pay with Ease:</b> Choose from multiple secure payment options, including card payments, mobile wallets, or cash, to complete your ride.
              </p>
              <a href="#" className="how-it-works-btn button button-dark">
                Read More
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="icons-div-v-2">
              <div className="icon-item-wrap">
                <div className="single-icon">
                  <img src={logo1} />
                </div>
                <div className="how-it-works-text-wrapper">
                  <h3>Book in Just 2 Tabs</h3>
                  <p className="how-it-works-text">
                    Curabitur ac quam aliquam urna vehicula semper sed vel elit.
                    Sed et leo purus. Vivamus vitae sapien.
                  </p>
                </div>
              </div>
              <div className="icon-item-wrap">
                <div className="single-icon">
                  <img src={logo2} />
                </div>
                <div className="how-it-works-text-wrapper">
                  <h3>Get a Driver</h3>
                  <p className="how-it-works-text">
                    Curabitur ac quam aliquam urna vehicula semper sed vel elit.
                    Sed et leo purus. Vivamus vitae sapien.
                  </p>
                </div>
              </div>
              <div className="icon-item-wrap">
                <div className="single-icon">
                  <img src={logo3} />
                </div>
                <div className="how-it-works-text-wrapper">
                  <h3>Track your Driver</h3>
                  <p className="how-it-works-text">
                    Curabitur ac quam aliquam urna vehicula semper sed vel elit.
                    Sed et leo purus. Vivamus vitae sapien.
                  </p>
                </div>
              </div>
              <div className="icon-item-wrap">
                <div className="single-icon last-icon">
                  <img src={logo4} />
                </div>
                <div className="how-it-works-text-wrapper">
                  <h3>Arrive safely</h3>
                  <p className="how-it-works-text">
                    Curabitur ac quam aliquam urna vehicula semper sed vel elit.
                    Sed et leo purus. Vivamus vitae sapien.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWorkArea;

import doneIcon from "./../../../../assets/images/icon/4.webp"
import whoWeAre1 from "./../../../../assets/images/home/who-we-are-01.jpg"
import whoWeAre2 from "./../../../../assets/images/home/who-we-are-02.jpg"
import yellowBlob from "./../../../../assets/images/home/yellow-blob.svg"

function WhoWeAre() {
    return (
        <section className="who-we-are div-padding">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="who-we-are-left-content">
                        <h2 className="who-we-are-title pb-4">About CarrGo</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                        <ul className="who-we-are-list">
                            <li className="who-we-are-list-item">
                                <img width="30" src={doneIcon} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </li>
                            <li className="who-we-are-list-item">
                                <img width="30" src={doneIcon} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </li>
                            <li className="who-we-are-list-item">
                                <img width="30" src={doneIcon} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </li>
                            <li className="who-we-are-list-item">
                                <img width="30" src={doneIcon} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            </li>
                        </ul>
                        <a href="#" className="who-we-are-btn button button-dark">Read More</a>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className=" who-we-are-right-content">
                        <img className="who-we-are-blob" src="assets/images/home/yellow-blob.svg" alt="Yellow blob" />
                        <img className="who-we-are-image-1" width="500" src={whoWeAre1}
                            alt="Group of people" />
                        <img className="who-we-are-image-2" width="300" src={whoWeAre2}
                            alt="Group of people" />
                        <img className="who-we-are-blob-2" src={yellowBlob} alt="Yellow blob" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default WhoWeAre
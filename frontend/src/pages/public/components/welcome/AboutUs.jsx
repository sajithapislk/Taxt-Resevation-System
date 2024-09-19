function AboutUs() {
    return (
        <section className="about-us-area bg-2 div-padding">
        <div className="container" >
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-us-text">
                        <h2 className="div-title pb-4 mb-4">
                            Trusted Cab Services <span className="d-block">in the World</span>
                        </h2>
                        <p>
                            Curabitur placerat cursus nisi nec pharetra. Proin quis tortor
                            fringilla, placerat nisi nec, auctor ex. Donec commodo orci ac
                            lectus mattis, sed interdum sem scelerisque.
                        </p>
                        <div className="list-group-flush mb-4">
                            <div className="list-group-item bg-transparent border-bottom-0 p-0">
                                <p className="mb-0">
                                    <i className="fas fa-check-circle mr-4 p-3 grey rounded-circle"
                                        aria-hidden="true"></i>Cras justo odio
                                </p>
                            </div>
                            <div className="list-group-item bg-transparent border-bottom-0 p-0">
                                <p className="mb-0">
                                    <i className="fas fa-check-circle mr-4 mr-4 grey p-3 rounded-circle"
                                        aria-hidden="true"></i>Dapibus ac facilisis in
                                </p>
                            </div>
                            <div className="list-group-item bg-transparent border-bottom-0 p-0">
                                <p className="mb-0">
                                    <i className="fas fa-check-circle mr-4 mr-4 grey p-3 rounded-circle"
                                        aria-hidden="true"></i>Morbi leo risus
                                </p>
                            </div>
                        </div>
                        <a href="#" className="button button-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs
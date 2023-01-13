import React from "react";

const Bootstrap = () => {
    return(
        <>
            <div className="container">
                <div className="row bg-primary-subtle">
                    <div className="col-12">
                        Header
                    </div>
                </div>




                <div className="row bg-success-subtle">
                    <div className="col-12">
                        Menu Bar
                    </div>
                </div>

                <div className="row bg-warning-subtle">
                    <div className="col-3">
                        Left Sidebar
                    </div>
                    <div className="col-9 bg-info-subtle">
                        <div>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            <button className="btn btn-primary">Button</button>
                            {/* <img src='https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png' height={400}/> */}
                        </div>
                    </div>
                </div>

                <div className="row bg-primary-subtle">
                    <div className="col-12">
                        Footer
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bootstrap;
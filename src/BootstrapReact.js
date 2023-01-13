import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';

const BootstrapReact = () => {
    return(
        <>
            <Container>
                <Row className="bg-primary">
                    <Col xs={12}>
                        Header
                    </Col>
                </Row>
                <Row className="bg-success">
                    <Col xs={12}>
                        Menu Bar
                    </Col>
                </Row>
                <Row className="bg-warning">
                    <Col xs={3}>
                        Left Sidebar
                    </Col>
                    <Col xs={9} className="bg-danger">
                        <div>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
                            <br></br>
                            <Button variant="success" className="ownButton">Button</Button>
                            {/* <img src='https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png' height={400}/> */}
                        </div>
                    </Col>
                </Row>
                <Row className="bg-primary">
                    <Col xs={12}>
                        Footer
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default BootstrapReact;



// external css < same page css < inline styling
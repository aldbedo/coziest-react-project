import 'bootstrap/dist/css/bootstrap.min.css';
import { Col,Row } from 'react-bootstrap'

function Footer() {

    return (
        <div className="page-footer">
            <Col>
                <div className="footer-container">
                    <Row>
                        <Col xs={12} sm={8} md={6} lg={8}>
                            <p className="footer-text">Coziest ™ is a homegrown shirt store 
                                Proudrace started off as a brand that 
                                peddles deconstructed T-shirts. Today, 
                                it has all the means to make anybody 
                                stand out in a crowd.</p>
                            <p className="footer-text">A lifestyle and clothing brand that aims 
                                to change the mindset of people around 
                                the world with its on point and 
                                straightforward message.</p>
                            <br/>
                            <br/>
                            <p className="footer-copyright-text">
                                &copy; {new Date().getFullYear()} Copyright, Coziest</p>
                        </Col>
                        <Col>
                                <h6>CONTACT</h6>
                                <p className="footer-text">
                                    1870 New york, Cubao, Philippines
                                    <br/>
                                    coziestclo.com
                                    <br/>
                                    + 01 234 567 88
                                    <br/>
                                    + 01 234 567 89
                                </p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
}

export default Footer
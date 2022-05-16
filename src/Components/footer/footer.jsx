import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo_white.png"
import './style.css'

const footer = () => {

    // const navigate = useNavigate()
    // // const handleClickHome = () => {
    // //     navigate("/")
    // // }

    return(
        <div className="body_footer">
            <Container>
                <Row className="pt-3 pb-3">
                    <Col className="footer1" >
                        <img src={logo} alt="logo" className="logo_footer"/>
                        <p>We are professional wedding planners. we travel all over Surabaya for our clients!</p>
                    </Col>
                    <Col className="footer2">
                        <h4>Features</h4>
                        <Nav className="feature">
                            <ul>
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/service"}>Service</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                            </ul>
                        </Nav>
                    </Col>
                    <Col className="footer3">
                    <h4>Our contact information</h4>
                    <p>
                        Send us an e-mail: <br/>
                        wijayawedding@gmail.com<br/>
                        Phone: <a style={{color: 'white'}} href="https://wa.me/6281999965076">+62 819 9996 5076</a>
                    </p>
                    </Col>
                    <Col className="footer4">
                        <h4>Addres</h4>
                        <p>
                            Sidosermo IV<br/>
                            Surabaya<br/>
                            Jawa Timur2
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default footer;
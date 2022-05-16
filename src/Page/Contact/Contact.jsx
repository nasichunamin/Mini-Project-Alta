import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css'


const Contact = () => {
    return(
        <div className="contact_body">
            <div className="content">
                <Container>
                    <Row>
                        <h1 className="header_contact">Contact Us</h1>
                        <Col>
                        <p>
                            <b>Let us arrange your wedding</b><br/>
                            As all our destination weddings are bespoke, please contact us, and let us know what your dreams are. As soon as we have the relevant information we can send you a quote, based on your wishes.
                        </p>
                        <p>
                            <b>If possible, please include the following information:</b><br/>
                            <ul>
                                <li>Where do you wish to get married?</li>
                                <li>How many guests?</li>
                                <li>Date?</li>
                                <li>Type of ceremony?</li>
                                <li>Theme/style?</li>
                                <li>Budget</li>
                            </ul>
                        </p>
                        </Col>
                        <Col>
                        <p>
                            <b>Our contact information :</b><br/>
                            Send us an e-mail ( post@brudepikene.no)<br/>
                            Phone: <a href="https://wa.me/6281999965076">+62 819 9996 5076</a>
                            <br/><br/>
                            <b>Addres</b><br/>
                            Sidosermo IV No. 55<br/>
                            Surabaya<br/>
                            Jawa Timur2
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Contact;
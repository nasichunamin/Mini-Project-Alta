import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageAbout from "../../assets/image/photo_about.jpg"
import gallery1 from "../../assets/image/galery_about1.jpg"
import gallery2 from "../../assets/image/galery_about2.jpg"
import gallery3 from "../../assets/image/galery_about3.JPG"
import gallery4 from "../../assets/image/galery_about4.jpg"
import gallery5 from "../../assets/image/galery_about5.jpg"
import gallery6 from "../../assets/image/galery_about6.jpg"
import './style.css'

const About = () => {

    const gallery = [
        {
            src: gallery1
        },
        {
            src: gallery2
        },
        {
            src: gallery3
        },
        {
            src: gallery4
        },
        {
            src: gallery5
        },
        {
            src: gallery6
        },
    ]

// console.log(gallery)

    const [selectedImg, setSelectedImg] = useState(gallery[0].src);

    return(
        <div className="body_about">
            <div className="content_about">
            <Container>
                <Row>
                    <Col>
                        <img src={imageAbout} alt='About_Photo'className="image"/>
                    </Col>
                    <Col>
                        <h1 className="header_about">About Us</h1>
                        <p className="desc_about">
                        We are wijaya wedding, We are professional wedding planners, located in Surabaya. The company was founded in 2010, and we specialize in creating weddings.
                        <br/>
                        If you choose to get married in Surabaya you will have your own professional wedding planner who will coordinate all your requests. The day before the wedding, or on the wedding day, your wedding planner will meet you to go through the practicalities and final details for your wedding. On the wedding day we will be present to make sure everything runs smoothly and according to plan.  
                        Let us assist you in finding the best loactions and venues, select the best vendors, give you great ideas and help you with all the little details that are so important.                        
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="about_gallery">
                    <div className="d-flex justify-content-center">
                        <hr
                            style={{
                            color: '#fab95b',
                            borderColor: '#fab95b',
                            width: '400px',
                            height: '5px',
                            }}
                        />
                    </div>
                        <h1>Some Picture of Our Events</h1>
                    <div className="d-flex justify-content-center linePicture">
                        <hr
                            style={{
                            color: '#fab95b',
                            borderColor: '#fab95b',
                            width: '400px',
                            height: '5px',
                            }}
                        />
                    </div>
                        <img src={selectedImg} alt="selected" className="selected"/>
                        <div className="gallery">
                            {gallery.map((img, index)=> (
                                <img  key={index} src={img.src} alt="img1" onClick={() => setSelectedImg (img.src)}/>

                            ))}
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default About;
import { Container, Row, Col } from "react-bootstrap";
import BannerCarousel from "../../Components/Home/bannerSlider/BannerCarousel";
import image1 from '../../assets/image/galery_home1.jpg'
import image2 from '../../assets/image/galery_home2.jpg'
import image3 from '../../assets/image/galery_home3.jpg'
import Video from "../../Components/Home/video/homeVideo"
import "./style.css"
import { useState } from "react";

const Home = () => {

    const imageHome = [
        {
            src: image1,
        },
        {
            src: image2,
        },
        {
            src: image3,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempimg, setTempImg] = useState('')

    const viewImg = (imgSrc) => {
        setTempImg(imgSrc);
        setModel(true);
    }

    return(
        <div>
            <BannerCarousel/>
            <div className="body">
                <Container className="body_content1">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center line_header">
                                <hr
                                    style={{
                                    color: '#fab95b',
                                    borderColor: '#fab95b',
                                    width: '300px',
                                    height: '5px',
                                    }}
                                />
                            </div>
                                <h1>Wijaya Wedding</h1>
                            <div className="d-flex justify-content-center ">
                            <hr
                                style={{
                                color: '#fab95b',
                                borderColor: '#fab95b',
                                width: '300px',
                                height: '5px',
                                }}
                            />
                            </div>
                            <p>We would be happy to assist you on your wedding in Surabaya!  We are professional wedding planners. we travel all over Surabaya for our clients! Every wedding and couple is unique, and because of that we organize bespoke weddings.<br/><br/>
                            We can arrange legal civil and church weddings, symbolic weddings, and we also arrange same sex weddings. We can arrange the marriage outdoors, in beautiful surroundings. We can help with both luxury weddings to more casual affairs, and we guarantee that getting married in Norway will be an unforgettable experience.</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="container body_content2">
                    <Row>
                        <div className="d-flex justify-content-center linePreviewTop">
                            <hr
                                style={{
                                color: '#fab95b',
                                borderColor: '#fab95b',
                                width: '300px',
                                height: '5px',
                                }}
                            />
                        </div>
                            <h1 className="headerPreview">Preview Image</h1>
                        <div className="d-flex justify-content-center linePreviewBottom">
                            <hr
                                style={{
                                color: '#fab95b',
                                borderColor: '#fab95b',
                                width: '300px',
                                height: '5px',
                                }}
                            />
                        </div>
                        <div className={model? "model open" : "model"}>
                            <img src={tempimg}/>
                            <span onClick={() => setModel(false)}>&times;</span>
                        </div>

                        {imageHome.map((image, index) => {
                            return(
                                <Col>
                                <img src={image.src} alt="image1" key={index} onClick={() => viewImg(image.src)}/>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row className="cinematic">
                        <div className="d-flex justify-content-center lineCinematicTop">
                                <hr
                                    style={{
                                    color: '#fab95b',
                                    borderColor: '#fab95b',
                                    width: '300px',
                                    height: '5px',
                                    }}
                                />
                            </div>
                            <div className="headerCinematic">
                            <h1>Preview Cinematic</h1>
                            </div>
                        <div className="d-flex justify-content-center lineCinematicBottom">
                        <hr
                            style={{
                            color: '#fab95b',
                            borderColor: '#fab95b',
                            width: '300px',
                            height: '5px',
                            }}
                        />
                    </div>
                        <Col>
                            <Video className="video"/>
                        </Col>
                        <Col>
                            <div className="text_video">
                                <p>
                                    The video in addition is the result of our video wedding organizer portfolio. this video was taken while celebrating a wedding at the lalisa hotel a few months ago.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Home;
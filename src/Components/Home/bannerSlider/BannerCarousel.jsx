import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../assets/image/banner/banner1.jpg"
import img2 from "../../../assets/image/banner/banner2.JPG"
import img3 from "../../../assets/image/banner/banner3.jpg"

const BannerCarousel = () => {
    const imageProperties = [
        {
            id: 1,
            title: "Image 1",
            src: img1,
        },
        {
            id: 2,
            title: "Image 2",
            src: img2,
        },
        {
            id: 3,
            title: "Image 3",
            src: img3,
        }
    ]

    return(
        <div>
        <Carousel>
            {imageProperties.map((imagesObj) => {
                return (
                    <Carousel.Item key={imagesObj.id}>
                        <img 
                        src={imagesObj.src}
                        alt="Banner Slider"
                        width="100%"
                        />
                        
                    </Carousel.Item>
                )
            })}
        </Carousel>
        </div>
    )
}
export default BannerCarousel;
    
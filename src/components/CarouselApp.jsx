import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/carouselApp.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'

function CarouselApp() {

    return (
            <Carousel>
                    <Carousel.Item>
                        <img src={banner1} alt="banner1.jpg" className="d-block w-100"/>
                        <div className="carousel-overlay">
                            <Carousel.Caption>
                                <h3>ALWAYS DEDICATED</h3>
                                <p>Never stopped moving forward and has continuously<br/> 
                                    evolved by further cultivating their relationship
                                    with every<br/> individual alike and the community as a whole.</p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner2} alt="banner2.jpg" className="d-block w-100" />
                        <div className="carousel-overlay"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={banner3} alt="banner3.jpg" className="d-block w-100" />
                        <div className="carousel-overlay"/>
                    </Carousel.Item>
            </Carousel>
    );
}

export default CarouselApp


import Carousel from 'react-bootstrap/Carousel';

function AppCarousel() {
    return (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/banner1.jpg" alt="FIrst Slide"/>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/banner2.jpg" alt="Second Slide"/>
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src="./src/assets/banner3.jpg" alt="Second Slide"/>
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default AppCarousel;
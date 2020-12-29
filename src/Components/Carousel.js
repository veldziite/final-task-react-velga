import { Carousel } from 'react-bootstrap';
import Slide1 from'../Assets/images/Slide-1.jpg';
import Slide2 from'../Assets/images/Slide-2.png';
import Slide3 from'../Assets/images/Slide-3.jpg';

function Slides () {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Laimīgu Jauno gadu!</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    );
}

export default Slides;
import { Container } from 'react-bootstrap';
import Slides from '../Components/Carousel.js';
import Cards from '../Components/Cards.js';

function Home() {
    return (
    <Container fluid>
        <Slides />
        <Cards />
    </Container>
    );
}

export default Home;
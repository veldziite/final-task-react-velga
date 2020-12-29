import { Row, Col, Card } from 'react-bootstrap';
import Card1 from '../Assets/images/Cards-1.jpg';

function Directions() {

    return (
    <Card> 
         <Card.Body>
            <Row>
                <Col><Card.Img variant="left" src={Card1} style={{ width: '16rem' }} />
                </Col>
                <Col xs={6}>
                    <Card.Title>Wanna find me?</Card.Title>
                    <Card.Text>
                    Asdflkjaertvlkjasntvkjn (sits on keyboard) claw drapes, and destroy house in 5 seconds stare at ceiling, so ptracy meowing chowing and wowing or put toy mouse in food bowl run out of litter box at full speed . Instead of drinking water from the cat bowl, make sure to steal water from the toilet touch my tail, i shred your hand purrrr. 
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    );
}

export default Directions;
import { Row, Col, Card } from 'react-bootstrap';
import Card2 from '../Assets/images/Cards-2.jpg';

function HorizontalCard2() {

    return (
        <Card> 
        <Card.Header>Meow Two</Card.Header>  
        <Card.Body>
            <Row>
                <Col><Card.Img variant="top" src={Card2} style={{ width: '18rem' }} />
                </Col>
                <Col xs={8}>
                    <Card.Title>You meow what?</Card.Title>
                    <Card.Text>
                     Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock allways wanting food so chew the plant kitty. Purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Taco cat backwards spells taco cat fart in owners food and scratch the postman wake up lick paw wake up owner meow meow but lick sellotape hiiiiiiiiii feed me now.
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    );
}



export default HorizontalCard2;
           
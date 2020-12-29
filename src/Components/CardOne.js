import { Row, Col, Card } from 'react-bootstrap';
import Card1 from '../Assets/images/Cards-1.jpg';

function HorizontalCard() {

    return (
        <Card> 
        <Card.Header>Meow One</Card.Header>  
        <Card.Body>
            <Row>
                <Col><Card.Img variant="top" src={Card1} style={{ width: '18rem' }} />
                </Col>
                <Col xs={8}>
                    <Card.Title>You meow what?</Card.Title>
                    <Card.Text>
                    Meow meow you are my owner so here is a dead rat roll on the floor purring your whiskers off. Attack the dog then pretend like nothing happened scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in gnaw the corn cob. Spill litter box, scratch at owner, destroy all furniture, especially couch run up and down stairs so cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip . 
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    );
}


export default HorizontalCard;
           
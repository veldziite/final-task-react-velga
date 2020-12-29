import { Row, Col, Card } from 'react-bootstrap';
import Card3 from '../Assets/images/Cards-3.jpg';

function HorizontalCard3() {

    return (
        <Card> 
        <Card.Header>Meow</Card.Header>  
        <Card.Body>
            <Row>
                <Col>
                    <Card.Img variant="top" src={Card3} style={{ width: '18rem' }} />
                </Col>
                <Col xs={8}>
                    <Card.Title>Why would you want to contact me?</Card.Title>
                    <Card.Text>
                     But really. No need to contact me. My door is always open for you. Go away!
                    </Card.Text>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    );
}



export default HorizontalCard3;
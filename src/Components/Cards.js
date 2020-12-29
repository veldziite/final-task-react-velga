import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card1 from '../Assets/images/Cards-1.jpg';
import Card2 from '../Assets/images/Cards-2.jpg';
import Card3 from '../Assets/images/Cards-3.jpg';

function Cards() {
    return (
<Row className="mt-3">
    <Col> 
        <Card>
        <Card.Img variant="top" src={Card2} />
        <Card.Body>
            <Card.Title>Meow One</Card.Title>
            <Card.Text>
            A funny story about an amazing cat who wears glasses. Read more and have fun! 
            </Card.Text>
           <Link to="/Article1">
            <Button variant="secondary">Go to article</Button>
            </Link>
        </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card>
        <Card.Img variant="top" src={Card1} />
        <Card.Body>
            <Card.Title>Meow Two</Card.Title>
            <Card.Text>
            A sad story about an amazing cat who wears glasses. Read more and shed a tear! 
            </Card.Text>
            <Link to="/Article2">
            <Button variant="dark">Go to article</Button>
            </Link>
        </Card.Body>
        </Card>
    </Col>  
    <Col>
    
        <Card>
        <Card.Img variant="top" src={Card3} />
        <Card.Body>
            <Card.Title>Meow Three</Card.Title>
            <Card.Text>
            A boring story about an amazing cat who wears glasses. Read more and get sleepy! 
            </Card.Text>
            <Link to="/Article3">
            <Button variant="secondary">Go to article</Button>
            </Link>
        </Card.Body>
        </Card>
    </Col>
</Row>
    );
}

export default Cards;
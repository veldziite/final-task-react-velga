import { Container, Row, Col, Card } from 'react-bootstrap';
import RegistrationForm from '../Components/RegistrationForm';
import Card1 from '../Assets/images/Cards-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function RegistrationPage() {

    return (
        <Container>
            <Row className="mt-3" >
                <Card> 
                <Card.Header className="text-center">Register to get much info about how cool I am <FontAwesomeIcon icon={faPaw}/></Card.Header>  
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Img src={Card1} variant="top" />
                        </Col>
                        <Col xs={8}>
                            <Card.Title className="text-muted">Put in some info about yourself. Or not. I don't care..</Card.Title>
                            <Card.Text>
                                <RegistrationForm/>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
                </Card>
             </Row>
        </Container>
    );
}

export default RegistrationPage;
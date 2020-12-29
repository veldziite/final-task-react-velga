import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <Row className="mt-5 text-left bg-light">
            <Col>
            <FontAwesomeIcon icon={faPaw}/>
            . This is a footer .
            <FontAwesomeIcon icon={faPaw}/>
            </Col>
            <Col className="text-center">
            <FontAwesomeIcon icon={faPaw}/>
            </Col>
            <Col className="text-center">
            <FontAwesomeIcon icon={faPaw}/>
            . Made by veldziite screaming in panic .
            <FontAwesomeIcon icon={faPaw}/>
            </Col>
        </Row>
    );
}

export default Footer;
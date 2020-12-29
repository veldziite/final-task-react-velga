import Card1 from '../Assets/images/Cards-1.jpg';
import Card2 from '../Assets/images/Cards-2.jpg';
import Card3 from '../Assets/images/Cards-3.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import { Row, Col } from 'react-bootstrap';

function Lightbox() {
    return (
        <SRLWrapper>
    <Row>
    <a href={Card1}>
        <img src={Card1} style={{ maxWidth: '100%'}} alt="cat1"/>
    </a>
    </Row>
    <Row className="mt-3">
        <Col>
        <a href={Card3}>
            <img src={Card3} style={{ maxWidth: '100%'}} alt="cat3"/>
        </a>
        </Col>
        <Col>
        <a href={Card2}>
            <img src={Card2} style={{ maxWidth: '100%'}} alt="cat2"/>
        </a>
        </Col>
        <Col>
        <a href={Card1}>
            <img src={Card1} style={{ maxWidth: '100%'}} alt="cat1"/>
        </a>
        </Col>
    </Row>
    <Row className="mt-3">
        <Col>
        <a href={Card1}>
            <img src={Card1} style={{ maxWidth: '100%'}} alt="cat1"/>
        </a>
        </Col>
        <Col>
        <a href={Card3}>
            <img src={Card3} style={{ maxWidth: '100%'}} alt="cat3"/>
        </a>
        </Col>
        <Col>
        <a href={Card2}>
            <img src={Card2} style={{ maxWidth: '100%'}} alt="cat2"/>
        </a>
        </Col>
    </Row>
</SRLWrapper>
    );
}


export default Lightbox;
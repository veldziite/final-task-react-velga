import {  Row, Col, Container, Tab, Tabs } from 'react-bootstrap';
import MyMap from '../Components/Map';
import HorizontalCard from '../Components/CardOne';
import HorizontalCard2 from '../Components/CardTwo';
import HorizontalCard3 from '../Components/ContactsCard';
import Directions from '../Components/Directions';


function AboutUs() {
    return(
        <Container>
            <Row className="mt-3">
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="About us">
                        <HorizontalCard />
                    </Tab>
                    <Tab eventKey="profile" title="About me">
                        <HorizontalCard2 />
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                        <HorizontalCard3 />
                    </Tab>
                </Tabs>
            </Row>
            <Row className="mt-3">
                <Col>
                    <MyMap />
                </Col>
                <Col md={8}>
                <   Directions />
                </Col>         
            </Row>           
        </Container>     
    );
}

export default AboutUs;
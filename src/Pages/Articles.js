import {  Row,  Container } from 'react-bootstrap';
import HorizontalCard from '../Components/CardOne';

function Articles() {
    return(
        <Container>
            <Row className="mt-3">
                <HorizontalCard/>
             </Row>
             <Row className="mt-3">
                <HorizontalCard/>
             </Row>
             <Row className="mt-3">
                <HorizontalCard/>
             </Row>
             <Row className="mt-3">
                <HorizontalCard/>
             </Row>
        </Container> 
    );
}

export default Articles;
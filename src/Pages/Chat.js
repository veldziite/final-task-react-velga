import { Container, Row, Col } from 'react-bootstrap';
import AddNewPostForm from '../Components/AddNewPostForm';
import BlogPosts from '../Components/BlogPosts';

function Chat() {
    return (
        <Container>
           
            <Row>
                <Col>
                    <h1>Meow blog</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BlogPosts />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddNewPostForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat;
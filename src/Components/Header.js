import {Nav, Navbar} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
<div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faPaw}/> Murrr</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/" exact href="#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/Articles" href="#articles">Articles</Nav.Link>
      <Nav.Link as={Link} to="/Chat" href="#chat">Chat</Nav.Link>
      <Nav.Link as={Link} to="/about-us" href="#about">About us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}

export default Header;
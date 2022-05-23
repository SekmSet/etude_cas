import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand>Swinger room</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="/login">
                    Login
                </Nav.Link>
                <Nav.Link href="/register">
                    Sigin
                </Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
                <Button variant="primary">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Header
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import UserContext from "../../context/context";
import {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {logoutFirebase} from "../../firebase/Auth/Logout";

const Header = () => {
    const {isAuth, logout} = useContext(UserContext)
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutFirebase()
        logout()
        navigate("/")
    }

    const logoutButton = {
        marginLeft: "10px",
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/" className="nav-link">
                    Swinger room
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll>
                        {isAuth && (
                            <Link to="/profil" className="nav-link">
                                Profil
                            </Link>
                        )}
                        {!isAuth && (
                            <>
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                                <Link to="/register" className="nav-link">
                                    Sigin
                                </Link>
                            </>
                        )}

                    </Nav>
                    <Form className="d-flex">

                        {isAuth && (
                            <Button style={logoutButton} variant="danger" onClick={handleLogout}>Logout</Button>

                        )}
                    </Form>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
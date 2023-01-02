import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/nav.css'
const Navigation = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="active">Johnson Emmanuel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home"
                            >Home
                            </Nav.Link>
                            <Nav.Link href="#services"
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link href="#portfolio"
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href="#about"
                            >
                                About
                            </Nav.Link>
                            <Nav.Link href="#contact"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation

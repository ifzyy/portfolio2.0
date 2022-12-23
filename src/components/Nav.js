import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/nav.css'
const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="active">Johnson Emmanuel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >Home
                            </Nav.Link>
                            <Nav.Link href="#services"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >
                                Services
                            </Nav.Link>
                            <Nav.Link href="#portfolio"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link href="#about"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link href="#contact"
                                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
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

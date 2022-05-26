import React from "react";
import {
    Navbar,
    Container,
    Nav,
    ButtonGroup,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import "./Navbar.css";

export const NavbarComp = ({
    handleLogout,
    handleLogin,
    handleFailure,
    loginData,
}) => {
    return (
        <Navbar className="Navbar" expand="lg">
            <Container>
                <Navbar.Brand className="brand" href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto listnav">
                        <Nav.Link className="ms-2" href="#ourservice">
                            Our Service
                        </Nav.Link>
                        <Nav.Link className="ms-2" href="#whyus">
                            Why Us
                        </Nav.Link>
                        <Nav.Link className="ms-2" href="#testimonial">
                            Testimonial
                        </Nav.Link>
                        <Nav.Link className="ms-2" href="#faq">
                            FAQ
                        </Nav.Link>
                        <ButtonGroup>
                            <DropdownButton
                                variant="success"
                                as={ButtonGroup}
                                title="Account"
                                id="bg-nested-dropdown"
                            >
                                <Dropdown.Item href="/">Landing Page</Dropdown.Item>
                                <Dropdown.Item href="/cars">Sewa Mobil</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

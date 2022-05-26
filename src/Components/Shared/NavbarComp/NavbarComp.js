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
import { GoogleLogout } from "react-google-login";

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
                        {loginData ? (
                            <ButtonGroup>
                                <DropdownButton
                                    variant="success"
                                    as={ButtonGroup}
                                    title="Account"
                                    id="bg-nested-dropdown"
                                >
                                    <Dropdown.Item href="/">Landing Page</Dropdown.Item>
                                    <Dropdown.Item href="/cars">Sewa Mobil</Dropdown.Item>
                                    <Dropdown.Item>
                                        <GoogleLogout
                                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                            buttonText="Logout"
                                            onLogoutSuccess={handleLogout}
                                        ></GoogleLogout>
                                    </Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        ) : (
                            <div>
                                <ButtonGroup>
                                    <DropdownButton
                                        variant="success"
                                        as={ButtonGroup}
                                        title="Register"
                                        id="bg-nested-dropdown"
                                    >
                                        <Dropdown.Item href="/login">Register</Dropdown.Item>
                                        <Dropdown.Item href="/cars">Sewa Mobil</Dropdown.Item>
                                        <Dropdown.Item></Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

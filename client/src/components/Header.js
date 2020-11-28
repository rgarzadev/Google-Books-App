import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function Header() {
  return (
        <div>
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>

                    <LinkContainer to="/">
                        <Navbar.Brand>Google Books Search App</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">

                            <LinkContainer to="/">
                                <Nav.Link>Search</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/saved">
                                <Nav.Link>Saved</Nav.Link>
                            </LinkContainer>

                            {/* <Nav.Link href="https://github.com/rgarzadev" target="_blank">Github</Nav.Link>

                            <Nav.Link href="#contact">Contact</Nav.Link>

                            <Nav.Link href="https://drive.google.com/file/d/17X8VpFT-gMVh2KuuQ4WFPoS1DXScLquS/view?usp=sharing" target="_blank">Resume</Nav.Link>
                             */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        </div>
    );
}

export default Header;
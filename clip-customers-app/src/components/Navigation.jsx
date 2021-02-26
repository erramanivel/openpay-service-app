import React from 'react';
import { Navbar, Nav }  from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
const Navigation = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>Customers Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Navigation);
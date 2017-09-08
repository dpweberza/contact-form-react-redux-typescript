import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
        <Navbar inverse={true} fluid={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/" exact={true}>Challenger App</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight={true}>
                    <LinkContainer to="/contact">
                        <NavItem eventKey={2}>Contact Us</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navigation;
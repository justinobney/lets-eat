import React, {Component} from 'react/addons';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class TopNav extends Component {
    displayName = 'TopNav'

    render() {
        return (
            <Navbar brand={<a href="#/">Let's Eat!</a>}>
                <Nav>
                    <NavItem href="#/login">Log In</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;

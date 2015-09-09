import React, {Component} from 'react/addons';
import {Navbar, Nav} from 'react-bootstrap'; // NavItem

class TopNav extends Component {
    displayName = 'TopNav'

    render() {
        return (
            <Navbar brand={<a href="#/">Let's Eat!</a>}>
                <Nav>
                    {/* <NavItem href="#/offices">Offices</NavItem> */}
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;

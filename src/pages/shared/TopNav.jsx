import React, {Component} from 'react/addons';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class TopNav extends Component {
    displayName = 'TopNav'

    render() {
        let {user} = this.props;
        return (
            <Navbar brand={<a href="#/">Let's Eat!</a>}>
                <Nav>
                    <NavItem href="#/login">Log In</NavItem>
                </Nav>
                <Nav right>
                    <NavItem href="#/foo">
                        {user.password.email} <img src={user.password.profileImageURL} 
                            className="img-circle" height="25" />
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default TopNav;

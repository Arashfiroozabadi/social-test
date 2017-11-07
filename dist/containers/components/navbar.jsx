import React,{ Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class NavbarLink extends Component {
  componentDidMount(){
  }
  
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#/">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer replace to="/" activeClassName="active">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer replace activeClassName="active" to="/form">
              <NavItem eventKey={2}>Form</NavItem>
            </LinkContainer>
            <LinkContainer replace to="/list">
              <NavItem eventKey={3}>List</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
              <LinkContainer replace to="/form">
                <MenuItem eventKey={4.2}>Form</MenuItem>
              </LinkContainer>
              <LinkContainer replace to="/List">
                <MenuItem eventKey={4.3}>List</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <LinkContainer replace to="/List">
                <MenuItem eventKey={4.4}>Separated link</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer replace to="/user">
              <NavItem eventKey={5}>Users</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarLink;
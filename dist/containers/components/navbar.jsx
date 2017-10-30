import React,{ Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


const ListItemLink = ({to, children}) => (
  <Route
    path={to}
    children={({match}) => (
      <li role="presentation" className={match ? 'active' : ''}>
        <Link to={to}>{children}</Link>
      </li>
  )}
  />
);


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
            <IndexLinkContainer to="/" activeClassName="active">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer activeClassName="active" to="/form">
              <NavItem eventKey={2}>Form</NavItem>
            </LinkContainer>
            <LinkContainer to="/list">
              <NavItem eventKey={3}>List</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
              <LinkContainer to="/form">
                <MenuItem eventKey={4.2}>Form</MenuItem>
              </LinkContainer>
              <LinkContainer to="/List">
                <MenuItem eventKey={4.3}>List</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <LinkContainer to="/List">
                <MenuItem eventKey={4.4}>Separated link</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarLink;
import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import SearchBar from '../Search/SearchBar';
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
      <div className='flex place-content-center'>
      <SearchBar />
      </div>
        <Navbar className="navbar-expand-md navbar-toggleable-md  border-bottom  mb-3" container light>
          <NavbarBrand tag={Link} to="/" className='pr-12'>LocalizeR</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-md-inline-flex flex-md-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">

            <NavItem>
                <NavLink tag={Link} className="text-dark" to="#">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="#">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="#">Contact Us</NavLink>
              </NavItem>
              <div className='md:ml-auto md:flex '>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">LoginPage</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/register">Register</NavLink>
              </NavItem>
              </div>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

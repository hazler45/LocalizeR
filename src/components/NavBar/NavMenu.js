import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import SearchBar from "../Search/SearchBar";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleServicesDropdown = this.toggleServicesDropdown.bind(this);
    this.state = {
      collapsed: true,
      servicesDropdownOpen: false, // Track dropdown state
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  toggleServicesDropdown() {
    this.setState({
      servicesDropdownOpen: !this.state.servicesDropdownOpen,
    });
  }

  render() 
  
  {
    const userName= sessionStorage.getItem("userName");
    return (
      
      <header>
        <div className="flex place-content-center pb-4">
          <SearchBar />
        </div>
        <Navbar
          className="navbar-expand-lg navbar-toggleable-md"
          container
          light
        >
          <NavbarBrand
            tag={Link}
            to="/"
            className="pr-12 font-semibold text-2xl text-orange-400"
          >
            LocalizeR
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse
            className="d-md-inline-flex flex-md-row-reverse"
            isOpen={!this.state.collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              {/* <NavItem>
                <NavLink tag={Link} className="text-orange-400" to="/">
                  Home
                </NavLink>
              </NavItem> */}

              <Dropdown
                isOpen={this.state.servicesDropdownOpen}
                toggle={this.toggleServicesDropdown}
              >
                <DropdownToggle tag="a" className="nav-link text-orange-400" caret>
                  Services
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/service/1">
                     Plumber
                    </DropdownItem> 
                  <DropdownItem tag={Link} to="/service/2">
                    Electrician
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/service/3">
                   HVAC
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/service/4">
                   Cleaning
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/service/5">
                   Furniture
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/service/6">
                   Moving
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/service/7">
                   Contracts
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink tag={Link} className="text-orange-400" to="/about">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-orange-400" to="/contact">
                  Contact Us
                </NavLink>
              </NavItem>
              <div className="md:ml-auto md:flex ">
              {userName ? (
                  <NavItem>
                    <NavLink tag={Link} className="text-orange-400" to="/userProfile/">
                      {userName}
                    </NavLink>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink tag={Link} className="text-orange-400" to="/login">
                      LoginPage
                    </NavLink>
                  </NavItem>
                )}
                {userName ? (
                  <NavItem>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavLink tag={Link} className="text-orange-400" to="/register">
                      Register
                    </NavLink>
                  </NavItem>
                )}
              </div>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
export default (NavMenu)

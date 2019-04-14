import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Collapse, Navbar,
    NavbarToggler, Nav, NavItem, NavLink,
    DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown
} from 'reactstrap';

import classes from "./header.module.css";

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
                <Navbar color="light" light expand="md" sticky="top">
                    <Link className="nav-link" to="/">
                        <img src={logo} height="50" alt="Logo" />
                    </Link>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar className="collapse">
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <LinkContainer to="/student">
                                    <NavLink>
                                        <button className="chcke-rate show-btn">Apply Now</button>
                                    </NavLink>
                                </LinkContainer>
                            </NavItem>

                            <NavItem>
                                <LinkContainer to="/admin">
                                    <NavLink>
                                        <button className="chcke-rate show-btn">Pay EMI</button>
                                    </NavLink>
                                </LinkContainer>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav >
                                    <i className="fa fa-bars"></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <div className={classes.displays}>
                                            <div className="flot-menu">
                                                <span className="fa fa-close menu-trigger"></span>
                                                <ul className="list-unstyled">
                                                    <li><Link  to="/papply" ><i className="fa fa-car"></i>Personal Loans</Link></li>
                                                    <li><Link><i className="fa fa-book"></i>Education Loans</Link></li>
                                                    <li><Link><i className="fa fa-briefcase"></i>SME Business Loans</Link></li>
                                                    <li><Link><i className="fa fa-briefcase"></i>Two Wheeler Loans</Link></li>
                                                    <li><Link><i className="fa fa-user"></i>About Us</Link></li>
                                                    <li><Link><i className="fa fa-phone"></i>Contact Us</Link></li>
                                                    <li><Link><i className="fa fa-briefcase"></i>Careers</Link></li>
                                                    <li><Link><i className="fa fa-users"></i>Team</Link></li>
                                                    <li><Link><i className="fa fa-book"></i>Blog</Link></li>
                                                    <li><Link><i className="fa fa-newspaper-o"></i>InCred In News</Link></li>
                                                    <li className="small-screen"><Link href="pay-emi.html"><i className="fa fa-money"></i>Pay EMI</Link></li>
                                                </ul>
                                            </div>
                                        </div>}
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default Header;
import React, { Component } from 'react';
import {Nav,NavItem,Navbar} from "react-bootstrap";
import Outline from "./outlinebutton";

class Navigation extends Component{
    render(){
        return(
            <div>
                <Navbar  collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Tpo VJTI</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">Companies</NavItem>
                            <NavItem eventKey={3} href="#">About us</NavItem>

                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"><Outline name="Log in"/> </NavItem>
                            <NavItem eventKey={2} href="#"><Outline name="Sign up"/></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Navigation;
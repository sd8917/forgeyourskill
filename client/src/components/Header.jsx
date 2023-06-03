import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Button, Dropdown, Form } from 'bootstrap-4-react';
import './header.css'

const Header = () => {
    return (
        <>
            <Navbar className="nav" expand="lg" mb="3">
                <div className='container'>
                    <Navbar.Brand href="#">ForgeYourSkills</Navbar.Brand>
                    <Navbar.Toggler target="#navbarColor1" />
                    <Collapse navbar id="navbarColor1">
                        <Navbar.Nav className="mx-4" mr="auto">
                            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
                            <Nav.ItemLink href="#">Courses</Nav.ItemLink>
                            <Nav.ItemLink href="#">Practice</Nav.ItemLink>
                            <Nav.ItemLink href="#">Community</Nav.ItemLink>

                        </Navbar.Nav>
                        <div inline my="2 lg-0">
                            <Nav.ItemLink href="#">Login/Register</Nav.ItemLink>
                           
                        </div>
                    </Collapse>
                </div>

            </Navbar>

        </>
    )
}

export default Header
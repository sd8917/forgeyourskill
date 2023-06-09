import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Button, Dropdown, Form } from 'bootstrap-4-react';
import './header.css'

const Header = () => {
    return (
        <>
            <Navbar className="nav" expand="lg" mb="3">
                <div className='container'>
                    <Navbar.Brand href="/">ForgeYourSkills</Navbar.Brand>
                    <Navbar.Toggler target="#navbarColor1" />
                    <Collapse navbar id="navbarColor1">
                        <Navbar.Nav className="mx-4" mr="auto">
                            <Nav.ItemLink href="/" active>Home</Nav.ItemLink>
                            <Nav.ItemLink href="/course">Courses</Nav.ItemLink>
                            <Nav.ItemLink href="/practice">Practice</Nav.ItemLink>
                            <Nav.ItemLink href="/community">Community</Nav.ItemLink>

                        </Navbar.Nav>
                        <div inline my="2 lg-0" style={{display:"flex"}}>
                            <Nav.ItemLink href="/login">Login</Nav.ItemLink>
                            <Nav.ItemLink href="/register">Register</Nav.ItemLink>
                        </div>
                    </Collapse>
                </div>

            </Navbar>

        </>
    )
}

export default Header
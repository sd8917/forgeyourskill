import React, { Component } from 'react';
import { Form, Button } from 'bootstrap-4-react';

const containerStyle = {
    minHeight:"100vh"
  }
  
const Register = () => {
    return (
        <>
            <div className='container mb-4 h-100' style={containerStyle}>
                <Form>

                <Form.Group>
                        <label htmlFor="name">Name</label>
                        <Form.Input type="text" id="name" placeholder="Enter name" />

                    </Form.Group>

                    <Form.Group>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
                    </Form.Group>

                    <Form.Group>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Form.Input type="confirmPassword" id="confirmPassword" placeholder="Password" />
                    </Form.Group>

                    <Button primary type="submit">Register</Button>
                </Form>

            </div>
        </>
    )
}

export default Register
import React, { Component } from 'react';
import { Form, Button } from 'bootstrap-4-react';

const containerStyle = {
    minHeight:"100vh"
  }

const Login = () => {
    return (
        <>

            <div className='container mb-4 h-100' style={containerStyle}>

                <h1>Login</h1>
                <Form>

                    <Form.Group>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
                    </Form.Group>

                    <Button primary type="submit">Login</Button>
                </Form>

            </div>

        </>
    )
}

export default Login
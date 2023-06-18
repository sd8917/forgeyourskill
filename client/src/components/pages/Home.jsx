import React, { Component } from 'react';
import landingImage from '../../images/classroom.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../common/Card/CardComponent';



const Home = () => {
    return (
        <>

            <h2>Home Page</h2>


            <Container>
                <Row>
                    <Col>
                        <div className='landing-main-left-container'>
                            <div className='landing-main-header'>
                                <h1>School Pedia diary</h1>
                            </div>
                            <div className='landing-main-desciption'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Ullam maxime assumenda libero quae tempore, consequatur repellat fugiat iure inventore,
                                    id itaque dolores. Sequi voluptatibus voluptatum ducimus omnis deleniti inventore quisquam.</p>
                            </div>
                        </div>
                    </Col>
                    <Col >
                        <div className='landing-main-right' style={{height: "200px", width:"200px"} }>
                            <img src={landingImage} width={"100%"} height={"100%"}/>
                        </div>
                    </Col>
                </Row>


                <h3 className='mt-4 mb-4'>Service Provided</h3>

                <Row>
                    <Col>
                       <Card />
                    </Col>
                    <Col >
                    <Card />
                    </Col>

                    <Col >
                    <Card />
                    </Col>
                </Row>





            </Container>
        </>
    )
}

export default Home
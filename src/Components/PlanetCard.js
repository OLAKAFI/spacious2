import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Offcanvas} from 'react-bootstrap';
import {  useState } from 'react';
import CreateNewPlanet from './CreateNewPlanet';
import OffCanvasFriends from './OffCanvasFriends';






function PlanetCard({ name, ...props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const planets = [
        {
            id: 1,
            image: './images/planets/planet-5.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },

        {
            id: 2,
            image: './images/planets/planet-2.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },

        {
            id: 3,
            image: './images/planets/planet-3.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },

        {
            id: 4,
            image: './images/planets/planet-6.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 5,
            image: './images/planets/planet-3.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 6,
            image: './images/planets/planet-1.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 7,
            image: './images/planets/planet-2.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 8,
            image: './images/planets/planet-4.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 9,
            image: './images/planets/planet-7.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 10,
            image: './images/planets/planet-9.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 11,
            image: './images/planets/planet-8.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
        {
            id: 12,
            image: './images/planets/planet-2.svg',
            planetName:"Alpha",
            props: "Prop 235"

        },
    ]
    return (
        <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between">

            {
                planets.map(planet => (
                    
                    <Col xs="auto" md="auto" lg="3" sm="auto">
                        
                            <Card className="card-style my-3 " key={planet.id}>
                                <a href="#"   className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" onClick={handleShow}>
                                    <div className="planet-size mx-auto">
                                        <Card.Img variant="top" className="img-fluid" src={planet.image} /> 

                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-16 ">{planet.planetName}</Card.Title>
                                        <Card.Text>
                                            <small className="text-muted fs-12">{planet.props}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </a>
                                            
                            </Card>
                        
                            
                        
                        
                    </Col>
            
                    
                ))
            }
            {

           
                <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style" >
                    <Offcanvas.Header closeButton className="ms-auto me-4">
                    
                    </Offcanvas.Header>
                    <Offcanvas.Title className="fs-32  ms-3">Jane Cooper</Offcanvas.Title>
                    <Offcanvas.Body >
                        <p className="fs-16-norm">Jane is really a nice person. She’s been living on planet Alpha for the last 10 years. </p>
                        <Row className="mt-4">
                            <Col className=" ">
                                <p className="fs-16-normal canvas-popultn-style">Population</p>
                                <p className="fs-16 canvas-popultn-style">234</p>

                            </Col>
                            
                        </Row>
                        <p className="fs-16 text-muted mt-3">CHARACTERS</p>
                        {
                            <Row className="d-flex">
                                <OffCanvasFriends/>

                            </Row>
                            
                        }
                        

                    </Offcanvas.Body>
                    
                </Offcanvas>
            }   
            <div className=" float-button-style">
                <CreateNewPlanet/> 

            </div>


        </Row>
        

        
        
    )
}

export default PlanetCard

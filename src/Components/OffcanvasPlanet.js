import React from 'react'
import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Offcanvas} from 'react-bootstrap';
import character9 from '../myimage/character-9.png';
import character16 from '../myimage/character-16.png';
import character4 from '../myimage/character-4.png';
import character14 from '../myimage/character-14.png';
import character5 from '../myimage/character-5.png';

function OffcanvasPlanet({show, close, title, desc}) {
    const [planetChars, setPlanetChars] = useState([
        { image: character9, name: 'Eleanor Pena', id: 1 },
        { image: character16, name: 'Brooklyn Simmons', id: 2 },
        { image: character4, name: 'Kristin Watson', id: 3 },
        { image: character14, name: 'Cody Fisher', id: 4 },
        { image: character5, name: 'Courtney Henry', id: 5 }
        
    ]);
    return (
        <div>
            {
                

                
                    <Offcanvas  show={show} onHide={close}  placement="end" className="offcanvas-style " md="auto" lg="auto" sm="auto" backdrop={false} scroll={true} id="planet-sidebar"  >
                        <Offcanvas.Header closeButton className="ms-auto me-4">
     
                            
                        </Offcanvas.Header >
                        <Offcanvas.Title className="fs-32  ms-3" >{title}</Offcanvas.Title>
                        <p className="fs-16-norm ms-3 pe-3">Planet Alpha is the place to be if you like everything related to planets. I know it’s a bit meta, but come see by yourself.</p>

                        
                        <Offcanvas.Body >
                            
                            <Row className="mt-4">
                                <Col>
                                    <p className="fs-16-normal">Planets</p>
                                    <p className="fs-16">Alpha</p>

                                </Col>
                                <Col>
                                    <p className="fs-16-normal">Friends</p>
                                    <p className="fs-16">23</p>

                                </Col>
                            </Row>  
                            
                            <p className="fs-16 text-muted mt-3">FRIENDS</p>


                            <div>
                                {
                                    planetChars.map(e => (
                                        <Row className="d-flex mb-3" key={e.id}>
                                            <div className="col-3 ">
                                                <div className=' OffCanvasStyle' >
                                                    <img src={e.image} className='img-fluid h-100 rounded ' alt="" />
                                                </div>

                                            </div>
                                            <div className="col-9 my-auto">
                                                <p className=" fs-16 canvas-popultn-style">{e.name}</p>
                                                <p className=" fs-12 canvas-popultn-style">Amet minim mollit non deserunt ullamco</p>

                                            </div>

                                        </Row>

                                    ))
                                    
                                }
                                
                            </div>
                        </Offcanvas.Body>
                        
                    </Offcanvas>
               
            }   
            
        </div>
    )
}

export default OffcanvasPlanet

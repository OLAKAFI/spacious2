import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Offcanvas} from 'react-bootstrap';
import {  useState } from 'react';
import CreateNewPlanet from './CreateNewPlanet';
import OffcanvasPlanet from './OffcanvasPlanet';
import {planets} from "./GeneralList"






function PlanetCard({ name, ...props }) {

    const [info, setInfo] = useState("");
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSidebar, setShowSidebar] = useState(false);

    

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

   

    const handleCloseSidebar = () =>  {
        setShowSidebar(false);
        let cards = document.querySelector('.planet-cards')
        cards.style.border = "none";

        let characterRow = document.querySelector('#planet-row')
        characterRow.style.marginRight = "0px";
        

    }    
    const handleShowSidebar = (e) => {
        let cards = document.querySelector('.planet-cards')
        
        cards.style.border = "none";
        
        setShowSidebar(true);

        let characterRow = document.querySelector('#planet-row')
        characterRow.style.marginRight = "200px";
        characterRow.classList.remove('row-cols-xl-4')
        characterRow.classList.remove('row-cols-lg-3')
        characterRow.classList.remove('row-cols-md-2')
        
        characterRow.classList.add('row-cols-xl-3')

        

       setInfo(e)
    }

   
    

    return (
        <div>
            {/* This is the row that contains the character cards */}
            <Row xs={1} md={2} lg={3} xl={4} className="d-flex justify-content-between g-3" id="planet-row" >

                {
                    planets.map(planet => (
                        
                            <Col sm="6" xs="auto" md="4" lg="4"  id="planet-col" className="my-3">
                                {/* This is the character card takes input from the character array to repeat itself  */}
                                <Card className="card-style " key={planet.id} id="planet-cards" className="planet-cards" onClick={() => handleShowSidebar(planet)}>
                                   
                                        <div className="character-size ">
                                            <Card.Img variant="top" className="img-fluid h-100" src={planet.image} alt=""/>
                                        </div>
                                                
                                        <Card.Body className="my-2 character-card-body" id="planet-body">
                                            <Card.Title className="fs-16 m-0 p-0 canvas-popultn-style">{planet.name}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted fs-12 m-0 p-0 canvas-popultn-style">{planet.pop} friends</small>
                                            </Card.Text>
                                        </Card.Body>

                                   
                                                    
                                </Card>
                                    
                                
                            
                            </Col>


                        
                        
                
                        
                    ))
                }


                <div className=" float-button-style ">
                    <CreateNewPlanet handleShow={handleShow}/> 

                </div>

            </Row>

            <OffcanvasPlanet show={showSidebar} close={handleCloseSidebar} title={info.name} desc={info.desc}   />


            
        
            
    </div>
        
        

        
        
    )
}

export default PlanetCard

// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Card, Offcanvas} from 'react-bootstrap';
// import character from './CharacterCards'

// import {  useState } from 'react';
// import CharacterCards from './CharacterCards'


// function PlanetOffCanvas({ name, ...props }) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
    
//     const Weekitem = ({
//         weekMonth, weekDayofWeek, weekDays, weekStatus, className
//     }) => {

    

//         return (
//             <div>
//                 {
                    

//                         {
//                 characters.map(character => (
                    
//                         <Col xs="auto" md="auto" lg="3" sm="auto">
//                             {/* This is the character card takes input from the character array to repeat itself  */}
//                             <Card className="card-style my-3 pb-2 " key={character.id}>
//                                 <a href="#"  className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" onClick={handleShow} >
//                                     <div className="character-size">
//                                         <Card.Img variant="top" className="img-fluid h-100" src={character.image} />
//                                     </div>
                                            
//                                     <Card.Body className="my-2 character-card-body">
//                                         <Card.Title className="fs-16 m-0 p-0 canvas-popultn-style">{character.characterName}</Card.Title>
//                                         <Card.Text>
//                                             <small className="text-muted fs-12 m-0 p-0 canvas-popultn-style">{character.props}</small>
//                                         </Card.Text>
//                                     </Card.Body>

//                                 </a>
                                                
//                             </Card>
                                
                            
                           
//                         </Col>


                    
                    
            
                    
//                 ))
//             }
            
//             <div>
            
                

           
//                 <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style " md="auto" lg="auto" sm="auto" >
//                     <Offcanvas.Header closeButton className="ms-auto me-4">
                    
//                     </Offcanvas.Header>
//                     <Offcanvas.Title className="fs-32  ms-3">my</Offcanvas.Title>
//                     <Offcanvas.Body >
//                         <p className="fs-16-norm">Jane is really a nice person. She’s been living on planet Alpha for the last 10 years. </p>
//                         <Row className="mt-4">
//                             <Col>
//                                 <p className="fs-16-normal">Planets</p>
//                                 <p className="fs-16">Alpha</p>

//                             </Col>
//                             <Col>
//                                 <p className="fs-16-normal">Friends</p>
//                                 <p className="fs-16">23</p>

//                             </Col>
//                         </Row>
//                         <p className="fs-16 text-muted mt-3">FRIENDS</p>
//                     </Offcanvas.Body>
                    
//                 </Offcanvas>
           
               
//             </div>

//             <div className=" float-button-style ">
//                 <CreateNewCharacter handleShow={handleShow}/> 

//             </div>
//                 <CharacterCards character={character}/>
                
                
//             </div>
//         )
//             }
// }

// export default PlanetOffCanvas

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card} from 'react-bootstrap';
import CreateNewCharacter from './CreateNewCharacter';
import {  useState } from 'react';
import OffcanvasChar from './OffcanvasChar';
import {characters} from "./GeneralList"









function CharacterCards() {
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
        let cards = document.querySelector('.character-cards')
        cards.style.border = "none";

        let characterRow = document.querySelector('#character-row')
        characterRow.style.marginRight = "0px";
        

    }    
    const handleShowSidebar = (e) => {
        let cards = document.querySelector('.character-cards')
        
        cards.style.border = "none";
        
        setShowSidebar(true);

        let characterRow = document.querySelector('#character-row')
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
            <Row xs={1} md={2} lg={3} xl={4} className="d-flex justify-content-left g-3" id="character-row" >

                {
                    characters.map(character => (
                        
                            <Col md="4" lg="4" id="character-col" className="my-3">
                                {/* This is the character card takes input from the character array to repeat itself  */}
                                <Card className="card-style my-3 pb-2 " key={character.id} id="character-cards" className="character-cards" onClick={() => handleShowSidebar(character)}>
                                   
                                        <div className="character-size">
                                            <Card.Img variant="top" className="img-fluid h-100" src={character.image} alt=""/>
                                        </div>
                                                
                                        <Card.Body className="my-2 character-card-body" id="character-body">
                                            <Card.Title className="fs-16 m-0 p-0 canvas-popultn-style">{character.name}</Card.Title>
                                            <Card.Text>
                                                <small className="text-muted fs-12 m-0 p-0 canvas-popultn-style">{character.friends} friends</small>
                                            </Card.Text>
                                        </Card.Body>

                                   
                                                    
                                </Card>
                                    
                                
                            
                            </Col>


                        
                        
                
                        
                    ))
                }

                <div className=" float-button-style ">
                    <CreateNewCharacter handleShow={handleShow}/> 

                </div>
                

            </Row>

            <OffcanvasChar show={showSidebar} close={handleCloseSidebar} title={info.name} desc={info.desc}   />


            
        
            
    </div>
        
        

        
        
    )
}

// function Example() {
//     return (
//       <>
//         {['end'].map((placement, idx) => (
//           <OffCanvasExample key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
// }

export default CharacterCards

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Image} from 'react-bootstrap';

import {  useState } from 'react'

function CreateNewPlanet() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="" className="rounded-circle"  onClick={handleShow}>
                <Image src="./images/assets/plus-64-icon.png"  roundedCircle />
            </Button>
            
    
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton>
                    <closeButton variant="primary"/>
                    <Modal.Title className="fs-48">Planets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-16">Images</Form.Label>
                            <Form.Control type="text"  size="lg" className="bg-light image-input" />
                            <Form.Text className="text-muted fs-16 fw-normal">
                                Paste the URL of a JPG or PNG of max 20 kb    
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fs-16">Name</Form.Label>
                            <Form.Control type="text"  size="lg" className=" name-input bg-light " />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-16">Description</Form.Label>
                            <Form.Control as="textarea" className="description-input bg-light " rows={3} />
                        </Form.Group>
                        <p className="errorMessage"></p>
                        
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" size="lg" onClick={handleClose}>CANCEL</Button>
                    <Button variant="" className="create-button-style text-white" size="lg" onClick={handleClose}>CREATE PLANET</Button>
                </Modal.Footer>
            </Modal>


            
        </div>
    )
}

// function ErrorMessage() {

//     let errorMessage = document.querySelector('.errorMessage');
//     let nameInput = document.querySelector('.name-input').value;
//     let imageInput = document.querySelector('.image-input').value;
//     let descriptionInput = document.querySelector('.description-input').value;
//     let html = '';

//         if nameInput, imageInput, descriptionInput = ""{
//             return
//         }
//     return (
//         <>
//           {['end'].map((placement, idx) => (
//             <OffCanvasExample key={idx} placement={placement} name={placement} />
//           ))}
//         </>
//     );
// }    
   

export default CreateNewPlanet


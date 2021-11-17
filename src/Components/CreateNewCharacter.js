import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Image} from 'react-bootstrap';

import {  useState } from 'react'

function CreateNewCharacter() {
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
                    <Modal.Title className="fs-48">Characters</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fs-16">Images</Form.Label>
                            <Form.Control type="text"  size="lg" className="bg-light " />
                            <Form.Text className="text-muted fs-16 fw-normal">
                                Paste the URL of a JPG or PNG of max 20 kb    
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fs-16">Name</Form.Label>
                            <Form.Control type="text"  size="lg" className="bg-light " />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-16">Description</Form.Label>
                            <Form.Control as="textarea" className="bg-light " rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="fs-16-norm">Friends</Form.Label>
                            
                            <Form.Select size="lg" className="fs-16-norm">
                                <option className="fs-16-norm">Jane Cooper</option>
                                <option value="1" className="fs-16-norm">Johnattan Jameson</option>
                                <option value="2" className="fs-16-norm">Clara Maggie</option>
                                <option value="3" className="fs-16-norm">Three</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </Form>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200630132503/iflag.jpg" width="20" height="16" alt="add button"/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" size="lg" onClick={handleClose}>CANCEL</Button>
                    <Button variant="" className="create-button-style text-white" size="lg" onClick={handleClose}>CREATE CHARACTER</Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default CreateNewCharacter


import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'

import ButtonComponent from '../button/ButtonComponent'

type IError = {
    error:boolean,
    handleModal: (value:boolean)=>void;
}

const ModalComponent = ({error,handleModal}:IError)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleModal(false)
    }

    useEffect(()=>{
        setShow(error)
        handleModal(true)
    },[error])

    return (
        <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <ButtonComponent typeButton={true} variant="secondary" onClick={handleClose} text="Close"/>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default ModalComponent 
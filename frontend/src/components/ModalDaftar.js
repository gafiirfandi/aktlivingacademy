import React from "react";

import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalDialog from "react-bootstrap/ModalDialog";
// import ModalTitle from "react-bootstrap/ModalTitle";
// import ModalBody from "react-bootstrap/ModalBody";
// import ModalFooter from "react-bootstrap/ModalFooter";

function ModalDaftar(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>
          Selamat anda berhasil mendaftar! Silakan cek email anda untuk data
          diri anda yang terkirim!
        </h4>
        {/* <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDaftar;

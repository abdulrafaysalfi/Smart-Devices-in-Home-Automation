import React from "react";
import "./DeviceModal.css";

import { Modal, Button, Form, Col } from "react-bootstrap";

import { useState } from "react";
function DeviceModal({
  label = "Test Label",
  createdBy = "rafaysalfi428",
  showModal = false,
}) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose} animation={true}>
        <Modal.Body closeButton>
          <div className="modal__body">
            <div className="body__left">
              <h2>DN</h2>
              <p>You can customize your device here.</p>
              <h3>DELETE DEVICE</h3>
            </div>
            <div className="body__right">
              <Modal.Header closeButton></Modal.Header>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Device Name" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Owner" />
                  </Col>
                </Form.Row>
              </Form>
              <div className="right__footer">
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DeviceModal;

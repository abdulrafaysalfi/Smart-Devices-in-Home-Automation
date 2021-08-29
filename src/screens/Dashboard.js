import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import axios from "../axios";
import AddIcon from "@material-ui/icons/Add";
import DeviceItem from "./DeviceItem";
import { useHistory } from "react-router-dom";
import "./DeviceModal.css";
import { Modal, Button, Form } from "react-bootstrap";
import NoDevice from "../components/NoDevice";
function Dashboard(props) {
  const [devices, setDevices] = useState([]);
  const history = useHistory();
  const { username } = (props.location && props.location.state) || {};
  // alert(username);
  useEffect(() => {
    axios.get("/api/virtualgateway").then((response) => {
      setDevices(
        response.data.filter((element) => element.createdBy === username)
      );
      // console.log(devices);
    });
  }, []);
  const addDevice = () => {
    history.push({
      pathname: "/addDevice",
      state: {
        username: username,
      },
    });
  };
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [mac, setMac] = useState();
  const [owner, setOwner] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {
    axios
      .put("/api/virtualgateway/" + id, { label: name, createdBy: owner })
      .then((response) => {
        if (response.statusText === "OK") {
          handleClose();
          axios.get("/api/virtualgateway").then((response) => {
            setDevices(
              response.data.filter((element) => element.createdBy === username)
            );
            console.log("AFTER DELETED" + devices);
          });
        }
      });
  };

  const handleDelete = () => {
    axios.delete("/api/virtualgateway/" + id).then((response) => {
      if (response.status === 200) {
        handleClose();
        axios.get("/api/virtualgateway").then((response) => {
          setDevices(
            response.data.filter((element) => element.createdBy === username)
          );
          console.log("AFTER DELETED" + devices);
          /*console.log(devices);*/
        });
      }
    });
  };

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div style={{ flex: 1 }}>
          <DashboardHeader className="dashboard__header" />
          <div className="dashboard__devices">
            <h3>Devices</h3>
            <div onClick={addDevice} className="add__item">
              <AddIcon />
              <h4>ADD DEVICE</h4>
            </div>
          </div>

          <div className="dashboard__body">
            {devices.length === 0 ? (
              <NoDevice />
            ) : (
              devices.map((device) => (
                <DeviceItem
                  onClick={() => {
                    setId(device._id);
                    setName(device.label);
                    setMac(device.macAddress);
                    setOwner(device.createdBy);
                    handleShow();
                  }}
                  key={device.__id}
                  label={device.label}
                  status="offline"
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={true}>
        <Modal.Body closeButton>
          <div className="modal__body">
            <div className="body__left">
              <h2 defaultValue="Unknown">{name}</h2>
              <p>You can customize your device here.</p>
              <h3 onClick={handleDelete}>DELETE DEVICE</h3>
            </div>
            <div className="body__right">
              <Modal.Header closeButton></Modal.Header>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Device Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Device MAC Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MAC ADDRESS"
                    value={mac}
                    onChange={(e) => setMac(e.target.value)}
                    disabled
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Created By</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Created By"
                    value={owner}
                    onChange={(e) => setName(e.target.value)}
                    disabled
                  />
                </Form.Group>
              </Form>
              <div className="right__footer">
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Dashboard;

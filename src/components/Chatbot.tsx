import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Collapse } from "react-bootstrap";
import "./Chatbot.css";
function Chatbot() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="chatbot-container">
      <p className="d-inline-flex gap-1">
        <Button
          className="btn btn-primary"
          onClick={() => setOpen(!open)}
          aria-controls="collapseExample"
          aria-expanded={open}
        >
          Chatbot
        </Button>
      </p>
      <Collapse in={open}>
        <div id="collapseExample" className="card card-body">
          Hello, how can I help you today?
        </div>
      </Collapse>
    </div>
  );
}

export default Chatbot;

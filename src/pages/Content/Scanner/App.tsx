import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

//Get prediction from somewhere else?
const prediction = 1;

const Scanner = () => {
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

import { withinViewport } from "withinViewport";

const Scanner = () => {
  const [pos, setPos] = useState([0, 0]);
  const [size, setSize] = useState([0, 0]);
  const [dragDone, setDragDone] = useState(true);
  const [showOption, setShowOption] = useState(false);
  const [scanning, setScanning] = useState(false);

  const handleDown = (e) => {
    setPos([e.clientX, e.clientY]);
    setSize([0, 0]);
    setDragDone(false);
    setShowOption(false);
  };

  const handleMove = (e) => {
    if (!dragDone) {
      setSize([e.clientX - pos[0], e.clientY - pos[1]]);
    }
  };

  const handleUp = () => {
    if (!(size[0] < 20 && size[1] < 20)) {
      setShowOption(true);
    }
    setDragDone(true);
  };

  const removeApp = () => {
    document.body.classList.remove("no-scroll");
    document.getElementsByClassName("scanner-shadow-ext")[0].remove();
  };

  const startScan = () => {
    handleDown({ clientX: 0, clientY: 0 });
    setScanning(true);

    const viewport = document.querySelector(".viewport");
    (viewport as HTMLElement).style.margin = "20px";
    const divs = document.getElementsByTagName("div");
    let input = "";
    for (let i = 0; i < divs.length; i++) {
      if (withinViewport(divs[i], { container: viewport as HTMLElement })) {
        input += divs[i].textContent;
      }
    }
    input.replace(/\s+/g, " ").trim();
  };

  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
  };

  let cardStyle = {
    alignItems: 'center',
    height: prediction === 1 ? '40%' : '25%',
    width: prediction === 1 ? '40%' : '25%'
  };

  if (closed) {
    return null;
  }

  return (
    <div className="overlay" style={{ alignItems: 'center' }}>
      <Card className="results" style={cardStyle}>
        <Card.Body className="body">
          {prediction === 0 ?
            (<Card.Text className="text">{'This is unlikely to be a\nphishing scam'}</Card.Text>)
            : (<Card.Text className="text2">
              {'Our model has detected to a degree of confidence that the text you provided is likely to be a scam. If this is regular text, we recommend closing the current website you are reading it on and avoiding the website in the future. If this is an email, it is advisable to delete the email, by pressing the “trash” icon found at the top of the email.'}
            </Card.Text>)
          }
          <Button className="btn2" variant="primary" onClick={handleClose}>Close</Button>
        </Card.Body>
      </Card>
    <div
      className="d-flex flex-column justify-content-start align-items-center"
      style={{
        width: "100%",
        height: "100%",
        pointerEvents: scanning ? "none" : "unset",
      }}
    >
      <div
        style={{ width: "100%", height: "100%" }}
        onMouseDown={handleDown}
        onMouseMove={handleMove}
        onMouseUp={handleUp}
      >
        <div
          className="scanning viewport"
          style={{
            left: pos[0],
            top: pos[1],
            width: size[0],
            height: size[1],
          }}
        ></div>
      </div>
      <div className={`popup-card mt-3 ${showOption ? "fade" : ""}`}>
        <Card.Body>
          <Card.Subtitle className="m-2">
            Do you want to scan this?
          </Card.Subtitle>
          <Stack className="mx-auto" direction="horizontal" gap={2}>
            <Button variant="outline-primary" onClick={() => startScan()}>
              Scan This!
            </Button>
            <Button variant="outline-secondary" onClick={() => removeApp()}>
              Close it.
            </Button>
          </Stack>
        </Card.Body>
      </div>
    </div>
  );
};

export default Scanner;

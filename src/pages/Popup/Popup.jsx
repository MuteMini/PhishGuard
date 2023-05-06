import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import { IoMdSettings, IoMdInformationCircleOutline, IoLogoGithub } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.css';

import logo from '../../assets/img/logo.png';
import './Popup.css';

const requestScan = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id, {action: "scan"});
  });
};

const Popup = () => {
  return (
    <div className='App'>
      <Stack style={{height:"100%"}} gap={3}>
        <div className="mt-auto">
          <Image src={logo} className="App-logo" alt="logo" />
        </div>
        <Button className="mt-auto" variant="outline-primary" onClick={() => requestScan()}> Scan Text </Button>  
        <Stack className="mx-auto" direction="horizontal" gap={3}>
          <Button variant="outline-secondary">
            <IoMdSettings />
          </Button>
          <Button variant="outline-secondary">
            <IoMdInformationCircleOutline />
          </Button>
          <Button variant="outline-secondary">
            <IoLogoGithub />
          </Button>
        </Stack>
        <div className="lead" style={{'fontSize': "12px"}} >Written by the PhishGuard Team</div>
      </Stack>
    </div>
  );
};

export default Popup;

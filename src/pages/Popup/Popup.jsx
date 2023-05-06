import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/img/logo.png';
import './Popup.css';

const Popup = () => {
  return (
    <div className='App'>
      <Stack gap={3}>
        <div>
          <Image src={logo} className="App-logo" alt="logo" />
        </div>
        <Button variant="outline-primary"> Scan Text </Button>
      </Stack>
    </div>
  );
};

export default Popup;

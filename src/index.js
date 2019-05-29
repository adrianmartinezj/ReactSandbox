import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from 'shards-react';
import './index.css';

  const buttonView =  (
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    );

  ReactDOM.render(
    buttonView,
    document.getElementById('root'));



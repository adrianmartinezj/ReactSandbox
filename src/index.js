import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TileView from './TileView/TileView';
import Alert from 'react-bootstrap/Alert';

  const buttonView =  (
    <h1>
      This is working again.
      <TileView />
    </h1>
    );

    

  ReactDOM.render(
    [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant, idx) => (
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>
    )),
    document.getElementById('root'));


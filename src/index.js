import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Image from 'react-bootstrap/Image';
// import img from './Assets/Yosemite_1900x831';

// import TileView from './TileView/TileView';
// import Alert from 'react-bootstrap/Alert';

  // const buttonView =  (
  //   <h1>
  //     This is working again.
  //     <TileView />
  //   </h1>
  //   );

  // Figure out how to get images in react-bootstrap working
  const pageView = (
    <Image src={require('./Yosemite_1900x831')} fluid/>
  );


    

  ReactDOM.render(pageView,
    document.getElementById('root'));


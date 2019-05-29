import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 
{
  Image,
  Navbar,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
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
    <div>
      <div className="banner_wrapper">
        <div className="background_banner">
          <Image src={require('./Assets/Yosemite_1900x831.jpg')} fluid />
        </div>
        <div className="column_banner">
          <div className="nav_wrapper">
            <Navbar bg="light" expand="lg">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar>
          </div>
        </div>
      </div>
      <h1>
        Whoah it worked

        what does
        This
        do.
      </h1>
    </div>
  );


    

  ReactDOM.render(pageView,
    document.getElementById('root'));


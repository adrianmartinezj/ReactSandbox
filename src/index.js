import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { NavExample } from './NavBar/NavBar';





const element = <NavExample />;

  ReactDOM.render(
    element,
    document.getElementById('root'));


serviceWorker.unregister();

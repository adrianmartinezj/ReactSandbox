import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');

// NOTICE HOW THE EXPRESSION IS IN CURLY BRACES AND THE LITERAL IS IN QUOTES
// const element = <img src={user.avatarUrl}></img>;
// const element = <div tabIndex="0"></div>;

// MULTIPLE ELEMENTS
// const element = (
//   <div>
//   <h1>Hello!</h1>
//   <h2>Good to see you here.</h2>
// </div>
// );

ReactDOM.render(getGreeting(user), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

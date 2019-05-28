import React from 'react';
import ReactDOM from 'react-dom';
import 'shards-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TileView from './TileView/TileView';


// function formatName(user)

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
// ReactDOM.render(getGreeting(user), document.getElementById('root'));

// Typical way to render what we want
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);


// Functionally the same to React
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// PROPS = properties, will be passed in as one object.
// function Welcome(props) {
//   // Can extract values from props like 'props.name'
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Bobby bwaaaa" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// DO NOT CHANGE PROPS WHEN PASSED IN

// OK 
// function sum(a, b) {
//   return a + b;
// }

// NOT OK 
// function withdraw(account, amount) {
//   account.total -= amount;
// }

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {

//   }

//   componentWillUnmount() {

//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

  ReactDOM.render(
    <TileView />,
    document.getElementById('root'));


serviceWorker.unregister();

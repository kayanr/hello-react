import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let header = <h1>JAVA</h1>
let text = <p> <h2>Certificate Program</h2>
         This comprehensive course introduces software engineering using the JAVA programming language with object-oriented programming principles. Learn primitive and non-primitive data types, control flow constructs, built-in class libraries, and event-driven programming methods. Create and manipulate objects, classes and how to use object-oriented tools such as the class debugger. Learn how to design, create, build and debug Java applications and applets. Apply algorithmic thinking to solve programming problems. Implement syntax rules in Java programs and explain variables and data types used in program development and more. This course is designed for students with some programming experience and/or have some familiarity with Object Oriented Programming.</p>
ReactDOM.render(
  <div>
    {header}
    {text}
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let header = <h1>JAVA</h1>
let subheader = <h2>Certificate Program</h2>
let text = <p>This comprehensive course introduces software engineering using the JAVA programming language with object-oriented programming principles. Learn primitive and non-primitive data types, control flow constructs, built-in class libraries, and event-driven programming methods. Create and manipulate objects, classes and how to use object-oriented tools such as the class debugger. Learn how to design, create, build and debug Java applications and applets. Apply algorithmic thinking to solve programming problems. Implement syntax rules in Java programs and explain variables and data types used in program development and more. This course is designed for students with some programming experience and/or have some familiarity with Object Oriented Programming. </p>
let applyButton = <div>
<button>APPLY FOR THIS PROGRAM </button>
</div>

/* Applications are still being accepted for this(FREE) scholarship funded course. Don't miss this opportunity to advance your career!
This program is designed for:</p>);
let list = (
<ul>
    <li> students with some programming experience and/or those who work at a banking or 
    technology company and are seeking upward mobility.</li>
</ul>
<b>Application process:</b>

<ol>
<li>Complete online <u style ="color:blue">JAVA application</u></li>
<li>Attend one <u style ="color:blue">mandatory information session.</u></li>
<li>Take assessment test</li>
<li>Be selected for enrollment</li>
</ol>  */


ReactDOM.render(
  <div>
    {header}
    {subheader}
    {text}
    {applyButton}
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

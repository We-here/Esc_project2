import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar1 from './Navbar1'; 
import Navbar2 from './Navbar2'; 
import Navbar from './Navbar'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Navbar />
    <App />
  </div>,
  
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('rest')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

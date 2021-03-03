//import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
//import { Link } from './react-router';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar1 from './Navbar1';
import Home from './pages/Home';
import User from './pages/User';
import Signup from './pages/Signup';

function App() {

  return (
    <Router>
    <div className="App">
      {/* <div className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload LMAO.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </div> */}
      <Navbar1/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/user" component={User}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

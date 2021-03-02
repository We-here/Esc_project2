//import logo from './logo.svg';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar1 from './Navbar1';
import NavBar2 from './Navbar2';
import Home from './Home';
import Search from './Search';
//import { Link } from './react-router';

function App() {

  const [loginState, setLoginState] = useState({login: false});
  const [searchState, setSearchState] = useState({search: false});

  const changeLogin = () => {
    if (loginState.login == false){
      setLoginState({login: true});
    }
    else {
      setLoginState({login:false});
    }
  }

  return (
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
      {(searchState.search == false) ? (
        <NavBar1/>
      ) : (
        <NavBar2/>
      )}
      {(loginState.login == false) ? (
        <Home/>
      ) : (
        <Search/>
      )}
    </div>
  );
}

export default App;

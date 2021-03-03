import React from 'react';
import ReactDOM from 'react-dom';
import menu_icon from './menu_icon.png';
import logo_rect from './logo_rect.png';
import './Navbar1.css';
import SigninPopup from './SigninPopup';
import Sidebar from './Sidebar';
import {Link} from "react-router-dom"

class Navbar1 extends React.Component {

  

  signup() {
    alert("signing up"); // may use router or href instead of onClick
  }

  state = {
    seen: false,
    sidebar: false
  };

  toggleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    });
  }

  togglePopup = () => {
    this.setState({
      seen: !this.state.seen
    });
  }
  
  render() {
    const loginState = this.props.withLoginHook;
    return (
      <div className="Navbar1">
        <div class="navbar"> 
          <img id="nav-menu-icon" src={menu_icon} onClick={this.toggleSidebar} class="navbar-icons"/>
          <img id="nav-logo" src={logo_rect} class="navbar-icons"/> 
          <p id="nav-brand" class="navbar-icons dropshadow">Scratchbac</p>
          <Link to="/signup">
          <button id="signup-button" class="navbar-buttons dropshadow"> Sign up</button>
          </Link>
          <button id="signin-button" onClick={this.togglePopup} class="navbar-buttons dropshadow"> Sign in</button>
          <form> 
            <input type="text" id="nav-searchbar" name="search" placeholder="Search Scratchbac" class="dropshadow"/>
          </form>
          <div> {this.state.seen ?  <SigninPopup toggle={this.togglePopup} />  : null } </div>
        </div> 
        <div> {this.state.sidebar ?  <Sidebar toggle={this.toggleSidebar} />  : null } </div>
      </div>
    );
  }
}


export default Navbar1;

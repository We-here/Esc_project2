import React, { Component } from 'react'; 
import './Popup.css'; 
import cross_icon from './cross_icon.png';

class SigninPopup extends Component {
  handleClick = () => {
    this.props.toggle(); 
  };

  handleSignin = () => {
    this.props.signin();
  };

  render() {
    return ( 
      <div>
        <div id="signinpopup-background" onClick={this.handleClick}> </div>
        <div id="signin-popup" class="dropshadow">
          <img id="popup-cross-icon" src={cross_icon} onClick={this.handleClick} class="navbar-icons dropshadow"/>
          <p> Sign in to Scratchbac </p>
          <form> 
            <p class="popup-contents"> Username / Email / Mobile Number </p>
            <input type="text" id="signin-creds" name="creds" placeholder="Username" class="text-fields dropshadow"/>
            <p class="popup-contents"> Password <a href="#" id="forgot-password"> Forgot Password? </a></p>
            <input type="text" id="signin-password" name="password" placeholder="Password" class="text-fields dropshadow"/>
          </form>
          <button id="signin-popup-button" onClick={this.handleSignin} class="navbar-buttons dropshadow"> Sign in </button>
        </div>
      </div>
    )
  }
}

export default SigninPopup; 
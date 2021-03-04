import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Navbar_custom extends Component {
    render(){
        return (
            <Navbar style={{backgroundColor: "#7BA3D7"}} className="container-fluid">
                <Navbar.Brand>{/*Add images*/}
                    Scratchbac
                    </Navbar.Brand>
                <Form inline className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                </Form>
                <Button className="ml-xs" style={{marginRight: "10px"}}>Signup</Button>
                <Button className="ml-xs" >Signin</Button>
            </Navbar>
        );
    }
}
export default Navbar_custom;
import React, { Component } from "react";
import { Button, Card, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./AccountCreation.css"

class AccountCreation extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
    customer: 1
  };

  validateForm() {
    return (this.state.email.length > 0 && this.state.password.length > 0 &&
      this.state.confirmPassword.length && this.state.first_name.length > 0 &&
      this.state.last_name.length > 0);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  registerUser = async e =>
{
  e.preventDefault();
  this.setState({request : JSON.stringify({email : this.state.email, password : this.state.password, first_name:this.state.first_name, last_name:this.state.last_name, customer:this.state.customer})});

  const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/registerUser', {
  method: 'POST',
  headers: {'Content-type': 'application/json',},
  body: JSON.stringify({ email: this.state.email, password : this.state.password, first_name:this.state.first_name, last_name:this.state.last_name, customer:this.state.customer}),
  });

  const body = await response.text();

  this.setState({response : body});

  if(this.state.response ==='Ok'){    //If registration sucessful, go to login page
      window.location = 'https://cs160bankingapp.herokuapp.com/signin';      //navigate to customer page
  }
}



  render() {
    return (
      <div className="AccountCreation" >
             <p><b> {this.state.response}</b> </p>
        <Card style = {{ width: '30rem', height: '40rem'}}>
          <Card.Body>
           <Card.Title>BigBank Customer</Card.Title>
          <form onSubmit={this.registerUser}>
            <FormGroup controlId="email" bsSize="small">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="first_name" bsSize="small">
              <FormLabel>First Name</FormLabel>
              <FormControl
                autoFocus
                type="name"
                placeholder="Enter First Name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="last_name" bsSize="small">
              <FormLabel>Last Name</FormLabel>
              <FormControl
                autoFocus
                type="name"
                placeholder="Enter Last Name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="small">
              <FormLabel>Password</FormLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter password"
                type="password"
              />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="small">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                type="password"
              />
            </FormGroup>
            <FormLabel controlId="space"></FormLabel>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Create Account
            </Button>
          </form>
         </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AccountCreation;

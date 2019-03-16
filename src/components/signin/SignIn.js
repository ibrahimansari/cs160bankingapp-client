import React, { Component } from "react";
import { Button, Card, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './SignIn.css'
import frontPageBackground from '../images/frontPageBackground.jpg';
import { throws } from "assert";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      response: ''
    };

    this.style = {
      backCol : {
        backgroundColor: "blue"
      }
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

validateLogin = async e =>
{
  e.preventDefault();
  this.setState({request : JSON.stringify({email : this.state.email.toLowerCase(), password : this.state.password})});

  const response = await fetch('/api/validateLogin', {
  method: 'POST',
  headers: {'Content-type': 'application/json',},
  body: JSON.stringify({ email: this.state.email.toLowerCase(), password : this.state.password }),
  });

  const body = await response.text();

  this.setState({response : body});
  if(this.state.response === 'Valid Login1')    //1 represents customer
  {
   // browserHistory.push('/nextpage');

    window.location = '/accountdashboard';      //navigate to customer page
  }else{
    if(this.state.response ==='Valid Login0'){    //0 represents manager
      window.location = '/managerdashboard';      //navigate to customer page
    }
  }
}

  render() {
    return (
      <div className="SignIn" >
       <p><b> {this.state.response}</b> </p>
        <Card style = {{ width: '30rem', height: '32rem'}}>
          <Card.Body>
           <Card.Title>BigBank Login</Card.Title>
          <form onSubmit={this.validateLogin}>
            <FormGroup controlId="email" bsSize="small">
              <FormLabel>Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter Email"
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
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <FormLabel></FormLabel>
          <a href=
            "/accountrecovery">Forgot your password?
          </a>
         </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SignIn

import React, { Component } from "react";
import { Button, Card, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './SignIn.css'

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


validateLogin = async e => {
  e.preventDefault();
  this.setState({request : JSON.stringify({email : this.state.email.toLowerCase(), password : this.state.password})});

  const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/validateUser', {
  method: 'POST',
  mode: "cors",
  headers: {'Content-type': 'application/json',},
  body: JSON.stringify({ email: this.state.email.toLowerCase(), password : this.state.password }),
  });

  const body = await response.json();

  this.setState({response : body["value"]});    //stores either Invalid Username and/or Password, Login Valid1, or Login Valid0

  if(this.state.response === 'Invalid Username and/or Password'){              //If login was unsuccessful

  }else{
    var transactions = body["transactions"].reverse();            //get account transactions
    var firstName = body["first_name"];
    var lastName = body["last_name"];
    var email  = body["email"];
    var address = body["address"];
    var zipcode = body["zipcode"];

    console.log(transactions);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(address);
    console.log(zipcode);

    if(this.state.response === 'Valid Login1')    //1 represents customer
    {
      // setting context variables
      this.props.context.updateAddress(address);
      this.props.context.updateZipcode(zipcode);
      this.props.context.updateFirstName(firstName);
      this.props.context.updateLastName(lastName);
      this.props.context.updateEmail(email);
      this.props.context.updateBalance(transactions[0].balance);
      this.props.context.updateIsSignedIn(true);
      this.props.context.updateDashboardDisplay(this.props.context.DEFAULT_DISPLAY);

      //console.log(transactions[0].balance);     //user current balance
      
      var accountInfo = body["accountInfo"];  //checkings/savings account info
      console.log(accountInfo[0]);
      console.log(accountInfo[1]);
      
      window.location = '/accountdashboard'; // link using this or else context breaks
    }else{
      if(this.state.response ==='Valid Login0'){    //0 represents manager
        window.location = '/managerdashboard';
      }
    }
  }
}


  render() {
    return (
      <div className="SignIn" >
        <Card style = {{ width: '30rem', height: '32rem'}}>
          <Card.Body>
            <p><b> {this.state.response}</b> </p>
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
            "https://cs160bankingapp.herokuapp.com/accountrecovery">Forgot your password?
          </a>
         </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SignIn

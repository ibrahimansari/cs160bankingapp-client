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


  validateLogin = async e =>
{
  e.preventDefault();
  this.setState({request : JSON.stringify({email : this.state.email.toLowerCase(), password : this.state.password})});

  const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/validateUser', {
  method: 'POST',
  mode: "cors",
  headers: {'Content-type': 'application/json',},
  body: JSON.stringify({ email: this.state.email.toLowerCase(), password : this.state.password }),
  });

  const body = await response.json();
    
  this.setState({response : body["value"]});
 
    
  //var success = body["value"];          //returns either 'False', 'Valid Login1' or 'Valid Login0', 
  if(this.state.response === 'Invalid Username and/or Password'){              //If login was unsuccessful
    //this.setState({response : body["value"]});
    
  }else{
    var transactions = body["transactions"];            //get account transactions
    var firstName = body["first_name"];
    var lastName = body["last_name"];
    var email  = body["email"];
    console.log(transactions);
    console.log(firstName);
    console.log(lastName);
    console.log(email);

    
 //   this.setState({response : body["value"]});

//       if(success === 'Valid Login1')    //1 represents customer
//     {
//       window.location.href = 'https://cs160bankingapp.herokuapp.com/accountdashboard';      //navigate to customer page
//     }else{
//       if(success ==='Valid Login0'){    //0 represents manager
//         window.location.href = 'https://cs160bankingapp.herokuapp.com/managerdashboard';      //navigate to customer page
//       }
//     }
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
            "https://cs160bankingapp.herokuapp.com/accountrecovery">Forgot your password?
          </a>
         </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SignIn

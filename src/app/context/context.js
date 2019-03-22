import React, {Component} from 'react';

const AppContext = React.createContext();

class MyProvider extends Component {

  state = {
    email: sessionStorage.getItem("email"),
    updateEmail : email =>this.updateEmail(email),
    first_name: sessionStorage.getItem("first_name"),
    updateFirstName: firstName => this.updateFirstName(firstName),
    last_name: sessionStorage.getItem("last_name"),
    updateLastName: lastName => this.updateLastName(lastName),
    balance: sessionStorage.getItem("balance"),
    updateBalance: amt => this.updateBalance(amt),
    customer: sessionStorage.getItem("customer"),
    updateCustomerStatus: cust => this.updateCustomerStatus(cust),
    transactions: []
  };

  updateEmail (em) {
    this.setState({email : em});
    sessionStorage.setItem("email", em);
  }

  updateFirstName (firstName) {
      this.setState({first_name: firstName});
      sessionStorage.setItem("first_name", firstName);
 }

 updateLastName (lastName) {
   this.setState({last_name: lastName});
   sessionStorage.setItem("last_name", lastName);
 }

 updateCustomerStatus(cust){
   if (cust === 0) {
     this.setState({customer: cust});
     sessionStorage.setItem("customer", cust)
   }
   else if (cust === 1) {
     this.setState({customer: cust});
     sessionStorage.setItem("customer", cust)
   }
 }

  updateBalance (amt) {
      this.setState({balance: amt});
      sessionStorage.setItem("balance", amt);
   }

  render() {
    return (
    <AppContext.Provider value={{context: this.state}}>
      {this.props.children}
    </AppContext.Provider>
    );
  }
}

export {MyProvider, AppContext};

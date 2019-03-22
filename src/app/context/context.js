import React, {Component} from 'react';

const AppContext = React.createContext();

class MyProvider extends Component {

  state = {
    updateEmail : email =>this.updateEmail(email),
    email: sessionStorage.getItem("email"),
    updateFirstName: firstName => this.updateFirstName(firstName),
    first_name: sessionStorage.getItem("first_name"),
    updateLastName: lastName => this.updateLastName(lastName),
    last_name: sessionStorage.getItem("last_name"),
    updateBalance: balance => this.updateBalance(balance),
    balance: sessionStorage.getItem("balance"),
    updateCustomerStatus: cust => this.updateCustomerStatus(cust),
    customer: sessionStorage.getItem("customer"),
    transactions: []
  };

  updateEmail (em) {
    sessionStorage.setItem("email", em);
    this.setState({email : em});
  }

  updateFirstName (firstName) {
      sessionStorage.setItem("first_name", firstName);
      this.setState({first_name: firstName});
 }

 updateLastName (lastName) {
   sessionStorage.setItem("last_name", lastName);
   this.setState({last_name: lastName});
 }

 updateCustomerStatus(cust){
   if (cust === 0) {
     sessionStorage.setItem("customer", cust)
     this.setState({customer: cust});
   }
   else if (cust === 1) {
     sessionStorage.setItem("customer", cust)
     this.setState({customer: cust});
   }
 }

  updateBalance (amt) {
      sessionStorage.setItem("balance", amt);
      this.setState({balance: amt});
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

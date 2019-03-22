import React, {Component} from 'react';

const AppContext = React.createContext();

class MyProvider extends Component {

  state = {
    email: "",
    updateEmail : email =>this.updateEmail(),
    first_name: "first",
    updateFirstName: firstName => this.updateFirstName(firstName),
    last_name: "",
    updateLastName: lastName => this.updateLastName(lastName),
    balance: 0,
    updateBalance: amt => this.updateBalance(amt),
    customer: 0,
    updateCustomerStatus: cust => this.updateCustomerStatus(cust),
    transactions: []
  };

  updateEmail (em) {
    this.setState({email : em});
  }

  updateFirstName (firstName) {
      this.setState({first_name: firstName});
 }

 updateLastName (lastName) {
   this.setState({last_name: lastName});
 }

 updateCustomerStatus(cust){
   if (cust === 0) {
     this.setState({customer: cust});
   }
   else if (cust === 1) {
     this.setState({customer: cust});
   }
 }

  updateBalance (amt) {
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

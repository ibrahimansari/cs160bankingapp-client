import React, {Component} from 'react';

const AppContext = React.createContext();

class MyProvider extends Component {

  state = {
    // Customer data
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
    updateTransactions : transactions => this.updateTransactions(transactions),
    transactions: sessionStorage.getItem("transactions"),

    // global boolean checks
    updateIsSignedIn: isSignedIn => this.updateIsSignedIn(isSignedIn),
    isSignedIn : sessionStorage.getItem("isSignedIn"),

    // check for conditional account dashboard rendering
    DEFAULT_DISPLAY: "DEFAULT",
    ACCOUNTS_DISPLAY: "ACCOUNTS",
    CARDS_DISPLAY: "CARDS",
    TRANSFERS_DISPLAY: "TRANSFERS",
    USER_SUMMARY_DISPLAY: "USERSUMMARY",
    updateDashboardDisplay : dashboardDisplay => this.updateDashboardDisplay(dashboardDisplay),
    dashboardDisplay : sessionStorage.getItem("dashboardDisplay")
  };

  updateEmail (email) {
    sessionStorage.setItem("email", email);
    this.setState({email});
  }

  updateFirstName (first_name) {
      sessionStorage.setItem("first_name", first_name);
      this.setState({first_name});
  }

 updateLastName (last_name) {
   sessionStorage.setItem("last_name", last_name);
   this.setState({last_name});
  }

 updateCustomerStatus(customer){
   if (customer === 0) {
     sessionStorage.setItem("customer", customer)
     this.setState({customer});
   }
   else if (customer === 1) {
     sessionStorage.setItem("customer", customer)
     this.setState({customer});
   }
 }

updateBalance (balance) {
      sessionStorage.setItem("balance", balance);
      this.setState({balance});
  }

updateTransactions (transactions) {
    sessionStorage.setItem("transactions", transactions);
    this.setState({transactions});
  }

updateIsSignedIn (isSignedIn) {
  sessionStorage.setItem("isSignedIn", isSignedIn);
  this.setState({isSignedIn});
}

updateDashboardDisplay (dashboardDisplay) {
  sessionStorage.setItem("defaultDisplay", dashboardDisplay);
  this.setState({dashboardDisplay});
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

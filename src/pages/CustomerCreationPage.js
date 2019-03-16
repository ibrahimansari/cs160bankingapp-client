import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';
import AccountCreation from '../components/accountcreation/AccountCreation';

class CustomerCreationPage extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <AccountCreation />
      </div>
    );
  }
}

export default CustomerCreationPage;

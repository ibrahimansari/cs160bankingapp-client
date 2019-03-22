import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';
import AccountCreation from '../components/accountcreation/AccountCreation';

class CustomerCreationPage extends Component {
  render() {
    const { context } = this.props;
    return (
      <div>
        <MainNavbar
          context = {context}
        />
        <AccountCreation
          context = {context}
          />
      </div>
    );
  }
}

export default CustomerCreationPage;

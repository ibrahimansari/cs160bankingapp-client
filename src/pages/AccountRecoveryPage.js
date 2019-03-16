import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';
import AccountRecovery from '../components/accountrecovery/AccountRecovery';

class AccountRecoveryPage extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <AccountRecovery />
      </div>
    );
  }
}

export default AccountRecoveryPage;

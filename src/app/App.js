import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import FrontPage from '../pages/FrontPage';
import SignInPage from '../pages/SignInPage';
import AtmLocator from '../pages/AtmLocator';
import AccountRecoveryPage from '../pages/AccountRecoveryPage';
import CustomerCreationPage from '../pages/CustomerCreationPage';
import ManagerCreationPage from '../pages/ManagerCreationPage';
import AccountDashboardPage from '../pages/AccountDashboardPage';


class App extends Component {
  render()  {
    return (
      <div className = "App">
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" render={ props => <FrontPage {...props} />} />
            <Route exact path="/signin" render={ props => <SignInPage {...props} />} />
            <Route exact path="/atmlocator" render={ props => <AtmLocator {...props} />} />
            <Route exact path="/customercreation" render={ props => <CustomerCreationPage {...props} />} />
            <Route exact path="/managercreation" render={ props => <ManagerCreationPage {...props} />} />
            <Route exact path="/accountrecovery" render={ props => <AccountRecoveryPage {...props} />} />
            <Route exact path="/accountdashboard" render={ props => <AccountDashboardPage {...props} />} />
          </React.Fragment>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;

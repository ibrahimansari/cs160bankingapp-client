import React, {Component} from 'react';
import SignIn from '../components/signin/SignIn';
import MainNavbar from '../components/navbar/MainNavbar';

class SignInPage extends Component {
  render()  {
    return (
      <div>
        <MainNavbar />
        <SignIn />
      </div>
    );
  }
}

export default SignInPage;

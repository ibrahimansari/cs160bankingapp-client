import React, {Component} from 'react';
import SignIn from '../components/signin/SignIn';
import MainNavbar from '../components/navbar/MainNavbar';

class SignInPage extends Component {
  render()  {
    const { context } = this.props;
    return (
      <div>
        <MainNavbar
          context = {context}
        />
        <SignIn
          context = {context}
        />
      </div>
    );
  }
}

export default SignInPage;

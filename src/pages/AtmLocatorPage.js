import React, { Component } from "react";
import MainNavbar from '../components/navbar/MainNavbar';
import AtmLocator from '../components/atmlocator/AtmLocator';

class AtmLocatorPage extends Component {
  render()  {
    const { context } = this.props;
    return (
      <div class = "FrontPage">
        <MainNavbar
          context = {context}
        />
        <AtmLocator
          context = {context}
        />
      </div>
    );
  }
}

export default AtmLocatorPage;

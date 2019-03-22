import React, { Component } from "react";
import MainNavbar from '../components/navbar/MainNavbar';
import Background from '../components/background/Background';
import './styles/FrontPage.css';

class FrontPage extends Component {
  render()  {
    const { context } = this.props;
    return (
      <div class = "FrontPage">
        <MainNavbar
          context = {context}
        />
        <Background
          context = {context}
        />
      </div>
    );
  }
}

export default FrontPage;

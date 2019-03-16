import React, { Component } from "react";
import MainNavbar from '../components/navbar/MainNavbar';
import Background from '../components/background/Background';
import './styles/FrontPage.css';

class FrontPage extends Component {
  render()  {
    return (
      <div class = "FrontPage">
        <MainNavbar />
        <Background />
      </div>
    );
  }
}

export default FrontPage;

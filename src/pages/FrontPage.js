import React, { Component } from "react";
import MainNavbar from '../components/navbar/MainNavbar';
import Background from '../components/background/Background';
import './styles/FrontPage.css';

class FrontPage extends Component {

  componentDidMount() {
    if(this.props.context.isSignedIn !== "true" || this.props.context.isSignedIn !== "false"){
      this.props.context.updateIsSignedIn("false"); // fix a null exception
    }

    console.log(this.props.context.isSignedIn);
  }
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


import React from "react";
import { withRouter } from "react-router-dom";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import AtmLocator from "../components/atmlocator/AtmLocator";
import MainNavbar from "../components/navbar/MainNavbar";
import { Navbar } from "react-bootstrap";

const divStyle = {
  backgroundColor: "#4e74a6",
  padding: "50px",
  margin: "50px",
  marginTop: "0px"
};
 
export class MapContainer extends React.Component {
  render() {
    const {context} = this.props;

    return (
      <div>
        <MainNavbar>
        
        </MainNavbar>

        <AtmLocator></AtmLocator>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAccPI1e6kwhlWF2XANTtIBgF1k1Uf32D0'
})(MapContainer)
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MainNavbar from '../components/navbar/MainNavbar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AtmLocator extends Component {
  static defaultProps = {
    center: {
      lat: 37.33,
      lng: -121.88
    },
    zoom: 16
  };
  render() {
    return (
      <div>
        <MainNavbar />
        <h1> Needs additional API calls </h1>
        <div style={{ height: '100vh', width: '75%', paddingTop: "80px"}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyASFL9qZEPuMTlSZCE84yFElmttyDa5YZU' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={37.3352}
              lng={-121.8811}
              text={'SJSU'}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default AtmLocator;

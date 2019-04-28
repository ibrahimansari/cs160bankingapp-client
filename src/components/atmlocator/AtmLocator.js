// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class AtmLocator extends Component {
//   static defaultProps = {
//     center: {
//       lat: 37.33,
//       lng: -121.88
//     },
//     zoom: 16
//   };
//   render() {
//     const { context } = this.props;
//     return (
//       <div>
//         <h1> Needs additional API calls </h1>
//         <div style={{ height: '100vh', width: '75%', paddingTop: "80px"}}>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: 'AIzaSyASFL9qZEPuMTlSZCE84yFElmttyDa5YZU' }}
//             defaultCenter={this.props.center}
//             defaultZoom={this.props.zoom}
//           >
//             <AnyReactComponent
//               lat={37.3352}
//               lng={-121.8811}
//               text={'SJSU'}
//             />
//           </GoogleMapReact>
//         </div>
//       </div>
//     );
//   }
// }

// export default AtmLocator;

import React from "react"
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const AtmLocator = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => {
                let places;
                const bounds = refs.map.getBounds();
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    bounds: bounds,
                    type: ['atm']
                };
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                        updatePlaces(results);
                    }
                })
            }
        }
    }),
)((props) => {
    return (
        <GoogleMap
            onTilesLoaded={props.fetchPlaces}
            ref={props.onMapMounted}
            onBoundsChanged={props.fetchPlaces}
            defaultZoom={8}
            defaultCenter={{ lat: 51.508530, lng: -0.076132 }}
        >
            {props.places && props.places.map((place, i) =>
                <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
            )}
        </GoogleMap>
    )
})

export default class MyFancyComponent extends React.PureComponent {
    render() {
        return (
            <AtmLocator />
        )
    }
}

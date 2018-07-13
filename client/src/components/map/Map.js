import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

                <InfoWindow onClose={this.onInfoWindoClose}>
                {/* <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
                </InfoWindow>
            </Map>                        
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyALiF_p0TU61to_870YLtP83k1tpT6yL7I")
})(MapContainer)
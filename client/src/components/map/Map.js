import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import data from "./stateList"; // TODO

export class Container extends Component {
  constructor(props) {
    super(props);

    var city = {
      name: "Miami",
      lat: 25.7617,
      lng: -80.1918,
      destination: 2,
      trips: 0
      //we can add users into the object later
    };

    var city = new Object();
    (city.name = "Atlanta"),
      (city.lat = 33.7756),
      (city.lng = -84.3963),
      (city.destination = 1),
      (city.trips = 0);
    this.state = {
      data: [],
      markerList: [],
      username: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      lat: 33.7756,
      lng: -84.3963
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlaceService(map);
  }

  componentDidMount = () => {
    this.addLocation();
  };

  displayMarker(lists) {
    return lists.map(({ lat, lng, name }) => (
      <Marker
        className={"Gtech"}
        desitnation={"Test 1"}
        name={"Georgia Tech"}
        position={{ lat, lng }}
        onClick={this.onMarkerClick}
        name={name}
      />
    ));
  }

  addLocation = () => {
    let counter = 0;
    var startMarker = window.setInterval(
      function() {
        counter++;

        // TODO
        // Remember to change the name of the destination array
        if (data.length - 1 > counter) {
          this.setState({
            data: [...this.state.data, data[counter]], // TODO Remember to change the name of the destination array
            lat: data[counter].lat,
            lng: data[counter].lng
          });
          return;
        }
        window.clearInterval(startMarker);
      }.bind(this),
      3000
    );
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    if (!this.props.loaded) {
      return <div>Loading</div>;
    }

    console.log("State: ", this.state);

    console.log("Lat: ", this.state.data.lat);

    return (
      <Map
        google={this.props.google}
        initialCenter={{
          // Atlanta, GA Coordinates
          lat: 33.749,
          lng: -84.388
        }}
        center={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        zoom={8}
        onClick={this.onMapClicked}
      >
        {/* Miami - Marker hardcoded we need to add lat & lng for major US states and possible major countries */}
        {this.displayMarker(this.state.data)}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALiF_p0TU61to_870YLtP83k1tpT6yL7I"
})(Container);

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

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
  }

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlaceService(map);
  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading</div>;
    }

    return (
      <Map
        google={this.props.google}
        initialCenter={{
          // Atlanta, GA Coordinates
          lat: 33.749,
          lng: -84.388
        }}
        zoom={14}
        onClicked={this.onMapClicked}
      >
        {/* Miami - Marker hardcoded we need to add lat & lng for major US states and possible major countries */}
        <Marker
          className={"Miami"}
          desitnation={"Trip 1"}
          name={"Miami"}
          position={{ lat: 25.7617, lng: -80.1918 }}
        />
        <Marker
          className={"Gtech"}
          desitnation={"Test 1"}
          name={"Georgia Tech"}
          position={{ lat: 33.7756, lng: -84.3963 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALiF_p0TU61to_870YLtP83k1tpT6yL7I"
})(Container);

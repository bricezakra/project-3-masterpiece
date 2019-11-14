// import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "../App.css";
import React from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// import React, { Component } from 'react'
// import SideNavigation from './components/SideNavigation';



const MAPBOX_TOKEN ="pk.eyJ1IjoiYnJpY2V6YWtyYSIsImEiOiJjazJwbmR3bmcwNjRmM25wZ2VmaTM3MHJ0In0.5F4SAt1Rtc-MXzjv6wxWaQ";
class SearchableMap extends React.Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 40.7250863,
      longitude: -73.9773608,
      zoom: 11
    },
    wifiHotspots: [],
    userLocation: {}
  };
  myMap = React.createRef();

  loadWifiMarkers = () => {
    return this.state.wifiHotspots.map(spot => {
      return (
        <Marker
           key={spot.objectid}
           latitude={parseFloat(spot.latitude)}
           longitude={parseFloat(spot.longitude)}
        >
          <img src="/wifi.png" alt="" />
        </Marker>
      );
    });
  };

  render() {
    console.log(this.state.viewport);
    return (
      <div className="App" style={{ marginLeft: 64 }}>
        <button onClick={this.setUserLocation}>My location</button>
        <div className="map">
          <ReactMapGL
            ref={this.myMap}
            {...this.state.viewport}
            width="100vw"
            height="100vh"
            onViewportChange={this.handleViewportChange}
            mapStyle="mapbox://styles/bricezakra/ck2psrdx91xod1cq8jz5q18bp"
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <Geocoder
              position="top-left"
              mapRef={this.myMap}
              mapboxApiAccessToken={MAPBOX_TOKEN}
             onViewportChange={this.handleViewportChange}
            />
            <GeolocateControl />
            <NavigationControl />
            {Object.keys(this.state.userLocation).length !== 0 ? (
              <Marker
                latitude={this.state.userLocation.lat}
                longitude={this.state.userLocation.long}
              >
                <img className="location-icon" src="location-icon.jpg" alt="" />
              </Marker>
            ) : ( 
               <div></div>
            )}
            {this.loadWifiMarkers()}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default SearchableMap;

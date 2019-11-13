// import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./App.css";
import React from "react";
import ReactMapGL, { GeolocateControl, NavigationControl, Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN ="pk.eyJ1IjoiYnJpY2V6YWtyYSIsImEiOiJjazJwbmR3bmcwNjRmM25wZ2VmaTM3MHJ0In0.5F4SAt1Rtc-MXzjv6wxWaQ";
class App extends React.Component {
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

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       let setUserLocation = {
           lat: position.coords.latitude,
           long: position.coords.longitude
        };
       let newViewport = {
          height: "100vh",
          width: "100vw",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 10
        };
        this.setState({
          viewport: newViewport,
          userLocation: setUserLocation
       });
    });
  };

  componentDidMount() {
    this.fetchStationAPI();
  }

  filterFreeWifi = hotspots => {
    return hotspots.filter(spot => {
        return spot.type === "Free";
     });
  };
  
  fetchStationAPI = () => {
    fetch("https://data.cityofnewyork.us/resource/yjub-udmw.json")
    .then(res => res.json())
    .then(hotspots => {
       let freeWifi = this.filterFreeWifi(hotspots);
       this.setState({
         wifiHotspots: freeWifi
        });
    });
  };

  loadWifiMarkers = () => {
    return this.state.wifiHotspots.map(spot => {
      return (
        <Marker
           key={spot.objectid}
           latitude={parseFloat(spot.latitude)}
           longitude={parseFloat(spot.longitude)}
        >
          <img src="/wifi.svg" alt="" />
        </Marker>
      );
    });
  };

  render() {
    console.log(this.state.viewport);
    return (
      <div className="App">
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
                <img className="location-icon" src="location-icon.jpg"/>
              </Marker>
            ) : ( 
               <div>Empty</div>
            )}
            {this.loadWifiMarkers()}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}

export default App;
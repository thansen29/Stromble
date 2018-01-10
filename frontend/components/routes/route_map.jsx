import React from 'react';
import MarkerManager from '../../util/marker_manager';

class RouteMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 40.730610,
      lng: -73.935242
    };
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 40.730610, lng: -73.935242},
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.state);


    this.map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const position = { lat: lat, lng: lng };
      const marker = new google.maps.Marker({
        position: position,
        map: this.map
      });
    });
  }

  // createMarker(coords){
  //   this.map.addListener("click", () => {
  //     const marker = new google.maps.Marker({
  //       position: coords,
  //       map: this.map
  //     });
  //
  //     // this.markers["endCoords"] = coords;
  //   });
  // }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default RouteMap;

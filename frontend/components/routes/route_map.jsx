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

  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default RouteMap;

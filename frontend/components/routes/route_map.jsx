import React from 'react';
import MarkerManager from '../../util/marker_manager';

class RouteMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startCoords: {
        lat: '',
        lng: ''
      },
      endCoords: {
        lat: '',
        lng: ''
      }

    };
  }

  componentDidMount(){
    const mapOptions = {

      center: { lat: 40.75127213572793, lng: -73.98369312286377 },
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const position = { lat, lng };
      this.MarkerManager.createMarker(position);

    });
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default RouteMap;

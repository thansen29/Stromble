import React from 'react';

class RouteMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 40.730610, lng: -73.935242},
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
// <div id="map-container" ref={ map => this.mapNode = map }>
//
// </div>

export default RouteMap;

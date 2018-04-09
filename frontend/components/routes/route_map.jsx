import React from 'react';
import _ from 'lodash';

//TODO: toggle running/riding
//TODO: center location is users current location
//TODO: search functionality
//TODO: clear markers
class RouteMap extends React.Component {
  constructor(props){
    super(props);
    this.markers = {};
    this.map;
    this.state = {
      startLat: '',
      startLng: '',
      endLat: '',
      endLng: '',
      distance: '',
      elevation: '',
      duration: ''
    };

    this.id = 1;
    this.routePath = [];
    this.elevations = [];
  }

  componentDidMount(){
    const mapOptions = {

      center: { lat: 40.75127213572793, lng: -73.98369312286377 },
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const position = { lat, lng };
      this.createMarker(position);
    });
  }

  createMarker(coords){
    const marker = new google.maps.Marker({
      position: coords,
      map: this.map,
      id: this.id
    });
    this.markers[this.id] = marker;
    this.id++;
    marker.addListener("click", () => {
      this.removeMarker(marker.id);
    });
    if(_.values(this.markers).length === 2){
      this.createRoute();
    } else if(_.values(this.markers).length > 2){
      this.updateRoute();
    }

  }

  removeMarker(markerId){
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }

  updateRoute(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const elevationService = new google.maps.ElevationService();

    const obj = _.values(this.markers);
    this.origin = obj[obj.length - 2].position;
    this.destination = obj[obj.length - 1].position;

    const routeRunRequest = {
      origin: this.origin,
      destination: this.destination,
      travelMode: 'WALKING'
    };

    directionsRenderer.setMap(this.map);

    directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
      if(directionsStatus === "OK"){
        directionsRenderer.setDirections(directionsResult);

        let distance = directionsResult.routes[0].legs[0].distance.text;
        this.distance += parseFloat(parseFloat(distance.slice(0, 3)).toFixed(1));
        this.routePath.concat(directionsResult.routes[0].overview_path);
        this.duration += parseInt(directionsResult.routes[0].legs[0].duration.text);

          elevationService.getElevationAlongPath({
            path: this.routePath,
            samples: this.routePath.length
          }, ((elevationResult, elevationStatus) => {
              if(elevationStatus === "OK"){
                elevationResult.forEach((sample) => {
                  this.elevations.push(sample.elevation);
                });
                const max = this.elevations.sort()[this.elevations.length-1];
                const min = this.elevations.sort()[0];
                let elevation = max - min;
                this.storeData(this.distance, this.origin, this.destination, elevation, this.duration);
              }
          }).bind(this));


      }
    }).bind(this));
  }

  createRoute(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const elevationService = new google.maps.ElevationService();

    const object = _.values(this.markers);
    this.origin = object[0].getPosition();
    this.destination = object[1].getPosition();
    const routeRunRequest = {
      origin: this.origin,
      destination: this.destination,
      travelMode: 'WALKING'
    };

    // const routeRideRequest = {
    //   origin: start,
    //   destination: end,
    //   travelMode: 'BICYCLING',
    // };

    directionsRenderer.setMap(this.map);

    directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
      if(directionsStatus === "OK"){
        directionsRenderer.setDirections(directionsResult);

        let distance = directionsResult.routes[0].legs[0].distance.text;
        this.distance = parseFloat(parseFloat(distance.slice(0, 3)).toFixed(1));
        this.routePath = directionsResult.routes[0].overview_path;
        this.duration = parseInt(directionsResult.routes[0].legs[0].duration.text);;

        elevationService.getElevationAlongPath({
          path: this.routePath,
          samples: this.routePath.length
        }, ((elevationResult, elevationStatus) => {
            if(elevationStatus === "OK"){
              elevationResult.forEach((sample) => {
                this.elevations.push(sample.elevation);
              });
              const max = this.elevations.sort()[this.elevations.length-1];
              const min = this.elevations.sort()[0];
              let elevation = max - min;
              this.storeData(distance, this.origin, this.destination, elevation, this.duration);
            }
        }).bind(this));


      }
    }).bind(this));
  }

  storeData(distance, start, end, elevation, duration){
    if(distance){
      this.setState({
        startLat: start.lat(),
        startLng: start.lng(),
        endLat: end.lat(),
        endLng: end.lng(),
        distance: parseFloat(distance).toFixed(1),
        elevation: parseInt(elevation),
        duration: duration
      });
      this.props.onChange(this.state);
    }
  }

  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default RouteMap;

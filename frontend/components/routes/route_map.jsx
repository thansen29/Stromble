import React from 'react';

//TODO: toggle running/riding
//TODO: center location is users current location
//TODO: search functionality
//TODO: clear markers
//TODO: chain markers
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
    if(Object.values(this.markers).length === 2){
      this.createRoute();
    } else if(Object.values(this.markers).length > 2){
      this.updateRoute();
    }

  }

  removeMarker(markerId){
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }

  updateRoute(){
    const obj = Object.values(this.markers);
    this.origin = obj[obj.length - 2].position;
    this.destination = obj[obj.length - 1].position;

    const routeRunRequest = {
      origin: this.origin,
      destination: this.destination,
      travelMode: 'WALKING'
    };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
      if(directionsStatus === "OK"){
        this.routeDisplay = directionsResult.routes[0].legs[0];
        directionsRenderer.setDirections(directionsResult);
        debugger
        // console.log(directionsResult.routes[0].legs[0].distance.text);
        // console.log(this.distance);
        let distance = directionsResult.routes[0].legs[0].distance.text;
        this.distance += parseFloat(distance.slice(0, 3));
        this.routePath = directionsResult.routes[0].overview_path;
        let duration = directionsResult.routes[0].legs[0].duration.text;

          const elevationService = new google.maps.ElevationService();
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
                this.storeData(this.distance, this.origin, this.destination, elevation, duration);
              }
          }).bind(this));


      }
    }).bind(this));
  }

  createRoute(){
    const object = Object.values(this.markers);
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

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
      if(directionsStatus === "OK"){
        this.routeDisplay = directionsResult.routes[0].legs[0];

        directionsRenderer.setDirections(directionsResult);
        let distance = directionsResult.routes[0].legs[0].distance.text;
        this.distance = parseFloat(distance.slice(0, 3));
        this.routePath = directionsResult.routes[0].overview_path;
        let duration = directionsResult.routes[0].legs[0].duration.text;

          const elevationService = new google.maps.ElevationService();
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
                this.storeData(distance, this.origin, this.destination, elevation, duration);
              }
          }).bind(this));


      }
    }).bind(this));
  }

  storeData(distance, start, end, elevation, duration){
    console.log("hi");
    if(distance){
      this.setState({
        startLat: start.lat(),
        startLng: start.lng(),
        endLat: end.lat(),
        endLng: end.lng(),
        distance: parseFloat(distance),
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

import React from 'react';
// import MarkerManager from '../../util/marker_manager';

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
    // this.MarkerManager = new MarkerManager(this.map);


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
    // console.log("marker created");
    if(Object.values(this.markers).length === 2){
      this.createRoute();
    }
  }

  removeMarker(markerId){
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }

  createRoute(){
    const start = this.markers[1].getPosition();
    const end = this.markers[2].getPosition();
    const routeRunRequest = {
      origin: start,
      destination: end,
      travelMode: 'WALKING',
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
        directionsRenderer.setDirections(directionsResult);
        let distance = directionsResult.routes[0].legs[0].distance.text;
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
                this.storeData(distance, start, end, elevation, duration);
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
        distance: parseFloat(distance),
        elevation: parseInt(elevation),
        duration: duration
      });
      this.props.onChange(this.state);
      // this.startLat = start.lat();
      // this.startLng = start.lng();
      // this.endLat = end.lat();
      // this.endLng = end.lng();
      // this.distance = parseFloat(distance);
      // this.elevation = parseInt(elevation);
      // const data = {
      //   startLat, startLng, endLat, endLng, distance, elevation
      // };
      // return data;
    }
    // debugger
  }



  render(){
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}
export default RouteMap;

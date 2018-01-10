import React from 'react';

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
    this.id = 1;
    this.routePath = [];
    this.elevations = [];
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

    const routeRideRequest = {
      origin: start,
      destination: end,
      travelMode: 'BICYCLING',
    };

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
      if(directionsStatus === "OK"){
        directionsRenderer.setDirections(directionsResult);
        let distance = directionsResult.routes[0].legs[0].distance.text;
        this.routePath = directionsResult.routes[0].overview_path;

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
                this.storeData(distance, start, end, elevation);
              }
          }).bind(this));


      }
    }).bind(this));
  }

  // getElevationInfo(){
  //   const elevationService = new google.maps.ElevationService();
  //   elevationService.getElevationAlongPath({
  //     path: this.routePath,
  //     samples: this.routePath.length
  //   }, ((elevationResult, elevationStatus) => {
  //       if(elevationStatus === "OK"){
  //         debugger
  //       }
  //   }).bind(this));
  // }


  storeData(distance, start, end, elevation){
    const start_lat = start.lat();
    const start_lng = start.lng();
    const end_lat = end.lat();
    const end_lng = end.lng();
    distance = parseFloat(distance);
    elevation = elevation;
  }
}



export default MarkerManager;

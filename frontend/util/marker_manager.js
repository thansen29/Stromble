import React from 'react';

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
    this.id = 1;
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
        this.storeData(distance, start, end);
      }
    }).bind(this));
  }

  storeData(distance, start, end){
    const start_lat = start.lat();
    const start_lng = start.lng();
    const end_lat = end.lat();
    const end_lng = end.lng();
    distance = parseFloat(distance);
    debugger
  }
}



export default MarkerManager;

import React from 'react';

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
    this.id = 1;
  }

  createMarker(coords){
    // each time a new marker is created, give it an id that is 'unique'
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
  }

  removeMarker(markerId){
    this.markers[markerId].setMap(null);
    delete this.markers[markerId];
  }

  //temporary limitation for only one endpoint
  // createMarker(coords){
  //   if(!this.markers.hasOwnProperty("endPoint")){
  //     const marker = new google.maps.Marker({
  //       position: coords,
  //       map: this.map,
  //       id: 2
  //     });
  //     this.markers[marker.id] = coords;
  //     marker.addListener("click", () => {
  //       this.removeMarker(marker.id);
  //     });
  //   }
  // }

  // removeMarker(markerId){
  //   this.markers[markerId].setMap(null); // currently only removes from map but not from this.markers
  //   delete this.markers[markerId];
  // }


}



export default MarkerManager;

import React from 'react';

class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(coords){
    console.log("lat" + coords.lat);
    console.log("lng" + coords.lng);
    // console.log("Updating endpoint");

    const marker = new google.maps.Marker({
      position: coords,
      map: this.map
    });
    // console.log(marker);
    // debugger
    //marker.position.lat()


  }
}



export default MarkerManager;

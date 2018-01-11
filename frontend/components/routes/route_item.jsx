import React from 'react';

const RouteItem = ({route}) => {
  debugger
  const startLat = route.start_lat;
  const startLng = route.start_lng;
  const endLat = route.end_lat;
  const endLng = route.end_lng;

  const url = `https://maps.googleapis.com/maps/api/staticmap?&size=300x300&path=color:0x0000ff|weight:5|${startLat},${startLng}|${endLat},${endLng}`;
  return (
    <li>
      <img src={url} alt="preview goes here"/>
    </li>
  );
};

export default RouteItem;
// https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:0x0000ff|weight:5|40.7507682204469,-73.9744663238525|40.7608783063089,-73.9870834350586

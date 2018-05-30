import React from 'react';
import { Link } from 'react-router-dom';

const RouteItem = ({route}) => {
  const startLat = route.start_lat;
  const startLng = route.start_lng;
  const endLat = route.end_lat;
  const endLng = route.end_lng;
  console.log(process.env);
  const url = `http://maps.googleapis.com/maps/api/staticmap?&size=350x350&path=color:0x0000ff|weight:5|${startLat},${startLng}|${endLat},${endLng}&key=AIzaSyAzqV02RQ3R5tDuhiUPlhww_AhPN0rukT0`;
  return (
    <li>
      <div className="route-item-container">
        <img src={url} alt="preview goes here"/>
        <div className="route-item-details">
          <Link to={ `/routes/${route.id}` }>{ route.title }</Link>
          <ul className="route-item-content">
            <li>
              <span className="route-item-data">{ route.distance }</span>
                <span className="show-datetime unit">mi</span>
              <span className="route-item-data">{ route.elevation_gain }</span>
                <span className="show-datetime unit">meters</span>
            </li>


            <li className="item-stat">
              <span className="route-item-data-unit">Distance</span>
                <span className="route-item-data-unit">Elevation Gain</span>
            </li>

          </ul>
        </div>
      </div>
    </li>
  );
};

export default RouteItem;

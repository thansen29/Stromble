import React from 'react';
import Navbar from '../navbar';
import RouteMap from './route_map';
import RouteBar from './route_bar';

class RouteIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: '',
      title: '',
      start_lat: '',
      start_lng: '',
      end_lat: '',
      end_lng: '',
      distance: 0,
      distance_unit: "miles",
      elevation_gain: '',
      elevation_unit: "meters",
      private: false
    };
  }

  render(){
    return (
      <section>
        <Navbar />
        <RouteMap />
        <RouteBar state={this.state}/>
      </section>
    );
  }
}

export default RouteIndex;

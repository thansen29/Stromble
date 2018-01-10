import React from 'react';
import Navbar from '../navbar';
import RouteMap from './route_map';
import RouteBar from './route_bar';
import MarkerManager from '../../util/marker_manager';

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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    console.log("hello");
    e.preventDefault();
    debugger
    const data = MarkerManager.storeData();
  }

  render(){
    return (
      <section>
        <Navbar />
        <section className="route-navbar">
          <button onClick={this.handleSubmit} className="route-save">Save</button>
        </section>


        <RouteMap />
        <RouteBar state={this.state}/>
      </section>
    );
  }
}

export default RouteIndex;
